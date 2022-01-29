//
//  UnZipUtils.cpp
//  poker-mobile
//
//  Created by 宋怡博 on 09/07/2021.
//

#include <sys/stat.h>
#include <unistd.h>
#include "NativeUtils/UnZipUtils.h"
#include "unzip/unzip.h"
#include "cocos/platform/CCApplication.h"
#include "base/CCScheduler.h"
using namespace cocos2d;

UnZipUtils::UnZipUtils()
{
    
}

UnZipUtils::~UnZipUtils()
{
    
}

int UnZipUtils::unZipFile(unZipTask task)
{
    const char* fullResPath = task.fullResPath.c_str();
    const char* dstPath = task.dstPath.c_str();
    int overwrite = task.overwrite;
    const char* password = task.password.c_str();

    _unzipMutex.lock();
    std::string _dstPath = dstPath;
    std::string _password = password;
    task.unzipFileNums = 0;
    if( (access( dstPath, 0 )) == -1 )
    {
        int re = mkdir(dstPath, 0777);//0777表示建立一个任何人任何程序都能读写和执行的权限，是最低的，也是默认的
        if (re  == -1) {//创建失败
            if (onUnZipError)
            {
                Application::getInstance()->getScheduler()->performFunctionInCocosThread([&, this](){
                    this->onUnZipError(UnZipUtils::ERROR_DIR_CR_FAILED, "create dstPath file failed ..");
                });
            }
            return 0;
        }
    }
    
    unzFile zip = unzOpen(fullResPath);//open zip
    if(zip == NULL)
    {
        if (onUnZipError)
        {
            Application::getInstance()->getScheduler()->performFunctionInCocosThread([&, this](){
                this->onUnZipError(UnZipUtils::ERROR_FILE_OP_FAILED, "failed to open zip file");
            });
        }
        return 0;
    }
    unz_global_info  globalInfo = {0ul, 0ul};
    unzGetGlobalInfo(zip, &globalInfo);//获取zip全局信息
    
    if (unzGoToFirstFile(zip) != UNZ_OK) {
        if (onUnZipError)
        {
            Application::getInstance()->getScheduler()->performFunctionInCocosThread([&, this](){
                this->onUnZipError(UnZipUtils::ERROR_FILE_OP_FAILED, "failed to open first file in zip file");
            });
        }
        return 0;
    }
    
    
    int success = 1;
    int ret = 0;
    unsigned char buffer[4096] = {0};
    int currentFileNumber = 0;
    do {
        if(_password.length() == 0)
        {
            ret = unzOpenCurrentFile(zip);
        }else
        {
            ret = unzOpenCurrentFilePassword(zip, _password.c_str());
        }
        if(ret != UNZ_OK)
        {
            success = 0;
            break;
        }
        // Reading data and write to file
        unz_file_info fileInfo;
        memset(&fileInfo, 0, sizeof(unz_file_info));
        
        ret = unzGetCurrentFileInfo(zip, &fileInfo, NULL, 0, NULL, 0, NULL, 0);//获取当前文件的信息
        if (ret != UNZ_OK) {
            success = 0;
            unzCloseCurrentFile(zip);
            break;
        }

        char *filename = (char *)malloc(fileInfo.size_filename + 1);
        unzGetCurrentFileInfo(zip, &fileInfo, filename, fileInfo.size_filename + 1, NULL, 0, NULL, 0);
        filename[fileInfo.size_filename] = '\0';
        //cout << filename << endl;

        task.unzipFileNums++;
        
        const uLong ZipCompressionMethodStore = 0;
        
        bool fileIsSymbolicLink = false;
        
        if((fileInfo.compression_method == ZipCompressionMethodStore) && // Is it compressed?
           (S_ISDIR(fileInfo.external_fa)) && // Is it marked as a directory
           (fileInfo.compressed_size > 0)) // Is there any data?
        {
            fileIsSymbolicLink = true;
        }
        
        if (filename[fileInfo.size_filename-1] == '/' || filename[fileInfo.size_filename-1] == '\\') {
            free(filename);
            unzCloseCurrentFile(zip);
            ret = unzGoToNextFile(zip);
            continue;
        }else{
            
            std::string strPath = filename;
            
            for(std::string::iterator it = strPath.begin(); it != strPath.end() ; ++it)
            {
                if(*it == '\\')
                {
                    *it='/';
                }
            }
            while(true)
            {
                long index = strPath.find("../");
                if(index<=0)
                break;
                long index2 = strPath.rfind("/",index-2);
                std::string sub = strPath.substr(index2,index-index2);
                strPath.replace(index2,index-1-index2+3,"");
            }
            
            for(std::string::iterator it = strPath.begin(); it != strPath.end() ; ++it)
            {
                if(*it == '/')
                {
                    std::string sub;
                    sub.assign(strPath.begin(),it);
                    std::string fullPath = _dstPath + "/" + sub;
                    if( (access( fullPath.c_str(), 0 )) == -1 )//没有目录，创建该目录
                    {
                        int re = mkdir(fullPath.c_str(), 0777);
                        if (re  == -1) {//创建失败
                            if (onUnZipError)
                            {
                                Application::getInstance()->getScheduler()->performFunctionInCocosThread([&, this](){
                                    this->onUnZipError(UnZipUtils::ERROR_DIR_CR_FAILED, "create dir file failed ..");
                                });
                            }
                            return 0;
                        }
                    }
                }
            }
        }
        
        std::string fullPath = _dstPath + "/" + filename;
        
        if (onUnZipProgress)
        {
            Application::getInstance()->getScheduler()->performFunctionInCocosThread([=](){
                this->onUnZipProgress(task.unzipFileNums,globalInfo.number_entry,fullPath);
            });
        }
        
        free(filename);
        
        if(access(fullPath.c_str(), 0) == 0 && overwrite==0)
        {
            //cout << "file exist = " << fullPath<< endl;
            unzCloseCurrentFile(zip);
            ret = unzGoToNextFile(zip);
            continue;
        }
        
        if(!fileIsSymbolicLink)
        {
            //cout << "write file = " << fullPath << endl;
            FILE *fp = fopen(fullPath.c_str(), "wb");
            while (fp) {
                int readBytes = unzReadCurrentFile(zip, buffer, 4096);
                
                if (readBytes > 0) {
                    fwrite(buffer, readBytes, 1, fp );
                } else {
                    break;
                }
            }
            if(fp)
            {
                fclose(fp);
                // Set the original datetime property
                if (fileInfo.dosDate != 0) {
                    
                }
            }
            
        }
        
        unzCloseCurrentFile( zip );
        ret = unzGoToNextFile( zip );
        
        currentFileNumber ++;
    } while (ret == UNZ_OK && UNZ_OK != UNZ_END_OF_LIST_OF_FILE);
    
    // Close
    ret = unzClose(zip);
    if (onUnZipSuccess)
    {
        Application::getInstance()->getScheduler()->performFunctionInCocosThread([&, this](){
            this->onUnZipSuccess();
        });
    }
    _unzipMutex.unlock();
    return success;
}


int UnZipUtils::createUnZipTask(const char* fullResPath,const char* dstPath,int overwrite,const char* password)
{
    unZipTask task;
    memset(&task, 0, sizeof(unZipTask));

    task.fullResPath = fullResPath;
    task.dstPath = dstPath;
    task.overwrite = overwrite;
    task.password = password;
    task.unzipFileNums = 0;
    
    _unzipThread = new std::thread(&UnZipUtils::unZipFile,this,task);
    _unzipThread->detach();
    return 0;
}
