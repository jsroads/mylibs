//
//  DeviceModel.h
//  poker-mobile
//
//  Created by 宋怡博 on 09/07/2021.
//

#ifndef DeviceModel_h
#define DeviceModel_h
#include <string>

class DeviceModel
{
public:
    static DeviceModel* getInstance();
    std::string getDeviceModel();
    std::string getPackageName();
    std::string makePackageName();
    std::string getWritablePath2();
    std::string getObbPath();
    std::string getApkPath();
    bool cheackPath(const char* destPath);
    /**idfa*/
    std::string getDeviceIDFA();
    /**uuid*/
    std::string getDeviceId();
    /**设备型号*/
    std::string getDeviceIdentifier();
    /**app名称*/
    std::string getAppName();
    /**系统版本*/
    std::string getSystemVersion();
    /**Ip*/
    std::string getDeviceIP();
    /**wifiName*/
    std::string getDeviceWifiName();
    /**cpu*/
    std::string getDeviceCPU();
    /**获取系统可用运行内存*/
    std::string getDeviceAvailMemory();
    /**获取系统总运行内存*/
    std::string getDeviceTotalMemory();
    /**获取游戏占用内存*/
    std::string getGameUsedMemory();
    /**获取系统可用容量*/
    std::string getDeviceAvailInternalStorageSize();
    /**获取系统总容量*/
    std::string getDeviceTotalInternalStorageSize();
    /**设置粘贴板*/
    bool setStringToPasteBoard(const char* str);
    /**app签名*/
    std::string getAppSignature();
};

#endif /* DeviceModel_h */
