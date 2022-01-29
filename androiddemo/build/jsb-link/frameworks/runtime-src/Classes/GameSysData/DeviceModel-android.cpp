//
//  DeviceModel.cpp
//  poker-mobile
//
//  Created by 宋怡博 on 09/07/2021.
//

#include "GameSysData/DeviceModel.h"
#include <sstream>
#include "platform/android/jni/JniHelper.h"
using namespace cocos2d;

bool isJavaFunctionExit(std::string sClassName,std::string funcName,std::string funcSign){
    JniMethodInfo t;
    return JniHelper::getStaticMethodInfo(t,sClassName.c_str(),funcName.c_str(),funcSign.c_str());
}

static DeviceModel* s_sharedDeviceModel = nullptr;
DeviceModel* DeviceModel::getInstance()
{
    if (s_sharedDeviceModel == nullptr)
    {
        s_sharedDeviceModel = new (std::nothrow) DeviceModel();
    }
    return s_sharedDeviceModel;
}

static std::string s_packageName = "";
std::string DeviceModel::getPackageName()
{
    if (s_packageName == "") {
        std::string m_funcName = "getPackageName";
        std::string m_funcSign = "()Ljava/lang/String;";
        std::string m_sClassName = "org/cocos2dx/lib/Cocos2dxHelper";
        
        if (isJavaFunctionExit(m_sClassName,m_funcName,m_funcSign)) {
            s_packageName = JniHelper::callStaticStringMethod(m_sClassName.c_str(),m_funcName.c_str());
        }
    }
    
    return s_packageName;
}

std::string DeviceModel::makePackageName()
{
    std::string packagename = getPackageName();
    std::string aa = ".";
    std::string bb = "/";

    int pos;
    pos = packagename.find(aa);////查找指定的串
    while (pos != -1)
    {
        packagename.replace(pos,aa.length(),bb);////用新的串替换掉指定的串
        pos = packagename.find(aa);//////继续查找指定的串，直到所有的都找到为止
    }
    return packagename;
}

std::string DeviceModel::getDeviceIDFA()
{
    std::string m_Class = "/SystemUtils";
    std::string m_funcName = "getAndroidID";
    std::string m_sClassName = DeviceModel::makePackageName() + m_Class;
    std::string m_funcSign = "()Ljava/lang/String;";
    
    std::string deciveid = "";
    if (isJavaFunctionExit(m_sClassName,m_funcName,m_funcSign)) {
        deciveid = JniHelper::callStaticStringMethod(m_sClassName.c_str(),m_funcName.c_str());
    }
    return deciveid;
}

std::string DeviceModel::getDeviceId()
{
    std::string m_Class = "/SystemUtils";
    std::string m_funcName = "getAndroidID";
    std::string m_sClassName = DeviceModel::makePackageName() + m_Class;
    std::string m_funcSign = "()Ljava/lang/String;";
    
    std::string deciveid = "";
    if (isJavaFunctionExit(m_sClassName,m_funcName,m_funcSign)) {
        deciveid = JniHelper::callStaticStringMethod(m_sClassName.c_str(),m_funcName.c_str());
    }
    return deciveid;
}

std::string DeviceModel::getDeviceModel()
{
    std::string m_Class = "/SystemUtils";
    std::string m_funcName = "getPhoneModel";
    std::string m_funcSign = "()Ljava/lang/String;";
    std::string m_sClassName = DeviceModel::makePackageName() + m_Class;

    std::string phoneModel = "";
    if (isJavaFunctionExit(m_sClassName,m_funcName,m_funcSign)) {
        phoneModel = JniHelper::callStaticStringMethod(m_sClassName.c_str(),m_funcName.c_str());
    }
    return phoneModel;
}

bool DeviceModel::cheackPath(const char *destPath)
{
    bool tmpCanDoThat = false;
    char * desZipPath = new char[strlen(destPath)+1];
    strcpy(desZipPath, destPath);
    strcat(desZipPath, "compress.zip");
    FILE* fp = fopen(desZipPath, "wb");
    if (fp) {
        tmpCanDoThat = true;
        fclose(fp);
    }else{
    }
    return tmpCanDoThat;
}

std::string DeviceModel::getWritablePath2()
{
    std::string apkPath = "";
    if(DeviceModel::cheackPath("/sdcard/"))
    {
        apkPath = "/sdcard";
    }
    else
    {
        std::string m_Class = "/SystemUtils";
        std::string m_funcName = "getApkPath";
        std::string m_funcSign = "()Ljava/lang/String;";
        std::string m_sClassName = DeviceModel::makePackageName() + m_Class;
        if (isJavaFunctionExit(m_sClassName,m_funcName,m_funcSign)) {
            apkPath = JniHelper::callStaticStringMethod(m_sClassName.c_str(),m_funcName.c_str());
        }
    }
    apkPath.append("/");
    apkPath.append(getPackageName());
    apkPath.append("/");
    return apkPath;
}

std::string DeviceModel::getObbPath()
{
    std::string m_Class = "/SystemUtils";
    std::string m_funcName = "getObbPath";
    std::string m_funcSign = "()Ljava/lang/String;";
    std::string m_sClassName = DeviceModel::makePackageName() + m_Class;
    
    std::string apkPath = "";
    if (isJavaFunctionExit(m_sClassName,m_funcName,m_funcSign)) {
        apkPath = JniHelper::callStaticStringMethod(m_sClassName.c_str(),m_funcName.c_str());
    }
    return apkPath;
}

std::string DeviceModel::getApkPath()
{
    std::string m_Class = "/SystemUtils";
    std::string m_funcName = "getApkPath";
    std::string m_funcSign = "()Ljava/lang/String;";
    std::string m_sClassName = DeviceModel::makePackageName() + m_Class;
    
    std::string apkPath = "";
    if (isJavaFunctionExit(m_sClassName,m_funcName,m_funcSign)) {
        apkPath = JniHelper::callStaticStringMethod(m_sClassName.c_str(),m_funcName.c_str());
    }
    return apkPath;
}

//获取ios的粘贴板
bool DeviceModel::setStringToPasteBoard(const char* str){
    std::string m_Class = "/SystemUtils";
    std::string m_funcName = "Clipboard";
    std::string m_funcSign = "(Ljava/lang/String;)V";
    std::string m_sClassName = DeviceModel::makePackageName() + m_Class;
    
    if (isJavaFunctionExit(m_sClassName,m_funcName,m_funcSign)) {
        JniHelper::callStaticStringMethod(m_sClassName.c_str(),m_funcName.c_str(),str);
    }
    return false;
}


std::string DeviceModel::getDeviceIdentifier()
{
    std::string m_Class = "/SystemUtils";
    std::string m_funcName = "getPhoneModel";
    std::string m_funcSign = "()Ljava/lang/String;";
    std::string m_sClassName = DeviceModel::makePackageName() + m_Class;

    std::string phoneModel = "";
    if (isJavaFunctionExit(m_sClassName,m_funcName,m_funcSign)) {
        phoneModel = JniHelper::callStaticStringMethod(m_sClassName.c_str(),m_funcName.c_str());
    }
    return phoneModel;
}

std::string DeviceModel::getAppName()
{
    std::string m_Class = "/SystemUtils";
    std::string m_funcName = "getAppName";
    std::string m_funcSign = "()Ljava/lang/String;";
    std::string m_sClassName = DeviceModel::makePackageName() + m_Class;
    
    std::string appName = "";
    if (isJavaFunctionExit(m_sClassName,m_funcName,m_funcSign)) {
        appName = JniHelper::callStaticStringMethod(m_sClassName.c_str(),m_funcName.c_str());
    }
    return appName;
}

std::string DeviceModel::getSystemVersion()
{
    std::string m_Class = "/SystemUtils";
    std::string m_funcName = "getSystemVersion";
    std::string m_funcSign = "()Ljava/lang/String;";
    std::string m_sClassName = DeviceModel::makePackageName() + m_Class;
    
    std::string version = "";
    if (isJavaFunctionExit(m_sClassName,m_funcName,m_funcSign)) {
        version = JniHelper::callStaticStringMethod(m_sClassName.c_str(),m_funcName.c_str());
    }
    return version;
}

std::string DeviceModel::getDeviceIP()
{
    std::string m_Class = "/SystemUtils";
    std::string m_funcName = "getIP";
    std::string m_funcSign = "()Ljava/lang/String;";
    std::string m_sClassName = DeviceModel::makePackageName() + m_Class;
    
    std::string ip = "";
    if (isJavaFunctionExit(m_sClassName,m_funcName,m_funcSign)) {
        ip = JniHelper::callStaticStringMethod(m_sClassName.c_str(),m_funcName.c_str());
    }
    return ip;
}

std::string DeviceModel::getDeviceWifiName()
{
    std::string m_Class = "/SystemUtils";
    std::string m_funcName = "getWifiName";
    std::string m_funcSign = "()Ljava/lang/String;";
    std::string m_sClassName = DeviceModel::makePackageName() + m_Class;
    
    std::string name = "";
    if (isJavaFunctionExit(m_sClassName,m_funcName,m_funcSign)) {
        name = JniHelper::callStaticStringMethod(m_sClassName.c_str(),m_funcName.c_str());
    }
    return name;
}

std::string DeviceModel::getDeviceCPU()
{
    std::string m_Class = "/SystemUtils";
    std::string m_funcName = "getDeviceCPU";
    std::string m_funcSign = "()Ljava/lang/String;";
    std::string m_sClassName = DeviceModel::makePackageName() + m_Class;
    
    std::string cpu = "";
    if (isJavaFunctionExit(m_sClassName,m_funcName,m_funcSign)) {
        cpu = JniHelper::callStaticStringMethod(m_sClassName.c_str(),m_funcName.c_str());
    }
    return cpu;
}

std::string DeviceModel::getDeviceAvailMemory()
{
    std::string m_Class = "/SystemUtils";
    std::string m_funcName = "getAvailMemory";
    std::string m_funcSign = "()Ljava/lang/String;";
    std::string m_sClassName = DeviceModel::makePackageName() + m_Class;
    
    std::string memory = "";
    if (isJavaFunctionExit(m_sClassName,m_funcName,m_funcSign)) {
        memory = JniHelper::callStaticStringMethod(m_sClassName.c_str(),m_funcName.c_str());
    }
    return memory;
}

std::string DeviceModel::getDeviceTotalMemory()
{
    std::string m_Class = "/SystemUtils";
    std::string m_funcName = "getTotalMemory";
    std::string m_funcSign = "()Ljava/lang/String;";
    std::string m_sClassName = DeviceModel::makePackageName() + m_Class;
    
    std::string memory = "";
    if (isJavaFunctionExit(m_sClassName,m_funcName,m_funcSign)) {
        memory = JniHelper::callStaticStringMethod(m_sClassName.c_str(),m_funcName.c_str());
    }
    return memory;
}

std::string DeviceModel::getGameUsedMemory()
{
    std::string m_Class = "/SystemUtils";
    std::string m_funcName = "getGameUsedMemory";
    std::string m_funcSign = "()Ljava/lang/String;";
    std::string m_sClassName = DeviceModel::makePackageName() + m_Class;
    
    std::string memory = "";
    if (isJavaFunctionExit(m_sClassName,m_funcName,m_funcSign)) {
        memory = JniHelper::callStaticStringMethod(m_sClassName.c_str(),m_funcName.c_str());
    }
    return memory;
}

std::string DeviceModel::getDeviceAvailInternalStorageSize()
{
    std::string m_Class = "/SystemUtils";
    std::string m_funcName = "getAvailStorageInternalSize";
    std::string m_funcSign = "()Ljava/lang/String;";
    std::string m_sClassName = DeviceModel::makePackageName() + m_Class;
    
    std::string memory = "";
    if (isJavaFunctionExit(m_sClassName,m_funcName,m_funcSign)) {
        memory = JniHelper::callStaticStringMethod(m_sClassName.c_str(),m_funcName.c_str());
    }
    return memory;
}

std::string DeviceModel::getDeviceTotalInternalStorageSize()
{
    std::string m_Class = "/SystemUtils";
    std::string m_funcName = "getTotalStorageInternalSize";
    std::string m_funcSign = "()Ljava/lang/String;";
    std::string m_sClassName = DeviceModel::makePackageName() + m_Class;
    
    std::string memory = "";
    if (isJavaFunctionExit(m_sClassName,m_funcName,m_funcSign)) {
        memory = JniHelper::callStaticStringMethod(m_sClassName.c_str(),m_funcName.c_str());
    }
    return memory;
}

std::string DeviceModel::getAppSignature()
{
    std::string m_Class = "/SystemUtils";
    std::string m_funcName = "getAppSignature";
    std::string m_funcSign = "()Ljava/lang/String;";
    std::string m_sClassName = DeviceModel::makePackageName() + m_Class;

    std::string appSignature = "";
    if (isJavaFunctionExit(m_sClassName,m_funcName,m_funcSign)) {
        appSignature = JniHelper::callStaticStringMethod(m_sClassName.c_str(),m_funcName.c_str());
    }
    return appSignature;
}