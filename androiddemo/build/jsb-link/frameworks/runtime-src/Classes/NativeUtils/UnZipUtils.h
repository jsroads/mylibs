//
//  UnZipUtils.h
//  poker-mobile
//
//  Created by 宋怡博 on 09/07/2021.
//

#ifndef UnZipUtils_h
#define UnZipUtils_h

#include <stdio.h>
#include <string>
#include <functional>
#include <thread>

struct unZipTask{
        unsigned long unzipFileNums;
        std::string fullResPath;
        std::string dstPath;
        int overwrite;
        std::string password;
};

class UnZipUtils{
    public:
        UnZipUtils();
        ~UnZipUtils();
    
        const static int ERROR_NO_ERROR = 0;
        const static int ERROR_DIR_CR_FAILED = -1;
        const static int ERROR_FILE_OP_FAILED = -2;
        
        std::function<void()> onUnZipSuccess;

        std::function<void(unsigned long unZipFileNum,
                           unsigned long totalFilesNum,std::string filePath)> onUnZipProgress;

        std::function<void(int errorCode,std::string errorStr)> onUnZipError;
        
        void setOnUnZipSuccess(const std::function<void()>& callback) {onUnZipSuccess = callback;};
        
        void setOnUnZipProgress(const std::function<void(unsigned long unZipFileNum,
                                                  unsigned long totalFilesNum,std::string filePath)>& callback) {onUnZipProgress = callback;};
        
        void setOnUnZipError(const std::function<void(int errorCode, std::string errorStr)>& callback) {onUnZipError = callback;};
        
        int unZipFile(unZipTask task);
        int createUnZipTask(const char* fullResPath,const char* dstPath,int overwrite = 1,const char* password = "");
    private:
        std::thread *_unzipThread;
        std::mutex _unzipMutex;
};

#endif /* UnZipUtils_h */
