//
//  DeviceModel.mm
//  poker-mobile
//
//  Created by 宋怡博 on 09/07/2021.
//

#import "GameSysData/DeviceModel.h"
#import <sstream>
#import <sys/sysctl.h>
#import <sys/param.h>
#import <sys/mount.h>
#import "sys/utsname.h"
#import <mach/mach.h>
#import <AdSupport/AdSupport.h>
#import <UIKit/UIKit.h>
#import <sys/socket.h>
#import <net/if.h>
#import <sys/ioctl.h>
#import <arpa/inet.h>

#import <CommonCrypto/CommonDigest.h>
#import <SystemConfiguration/CaptiveNetwork.h>
#import "NativeUtils/ObjcUtils.h"

static DeviceModel* s_sharedDeviceModel = nullptr;
DeviceModel* DeviceModel::getInstance()
{
    if (s_sharedDeviceModel == nullptr)
    {
        s_sharedDeviceModel = new (std::nothrow) DeviceModel();
    }
    return s_sharedDeviceModel;
}

std::string DeviceModel::getDeviceIDFA()
{
    NSString* idfaId;
     idfaId = [[[ASIdentifierManager sharedManager] advertisingIdentifier] UUIDString];
    
     if(idfaId == nil){
         idfaId = @"No_IDFA";
         
     }
     return [idfaId UTF8String];
}

std::string DeviceModel::getDeviceId()
{
    return [[[[UIDevice currentDevice] identifierForVendor] UUIDString] UTF8String];
}

std::string DeviceModel::getDeviceModel()
{
    struct utsname systemInfo;
    uname(&systemInfo);
    return systemInfo.machine;
}

std::string DeviceModel::getPackageName()
{
    return "ios";
}

std::string DeviceModel::makePackageName()
{
    return "ios";
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
    return "ios";
}

std::string DeviceModel::getObbPath()
{
    return "ios";
}

std::string DeviceModel::getApkPath()
{
    return "ios";
}

//获取ios的粘贴板
bool DeviceModel::setStringToPasteBoard(const char* str)
{
    UIPasteboard *pasteboard = [UIPasteboard generalPasteboard];
    pasteboard.string = [[NSString alloc] initWithUTF8String:str];
    return true;
}

std::string DeviceModel::getAppName(){
    NSDictionary *infoDictionary = [[NSBundle mainBundle] infoDictionary];
    NSString *app_Name = [infoDictionary objectForKey:@"CFBundleDisplayName"];
    return [app_Name UTF8String];
}

//获取ios的系统版本
std::string DeviceModel::getSystemVersion()
{
    float version = [[[UIDevice currentDevice] systemVersion] floatValue];
    std::ostringstream oss;
    oss<<version;
    std::string str(oss.str());
    return str;
}

std::string DeviceModel::getDeviceIdentifier(){
    // 需要#import "sys/utsname.h"
    struct utsname systemInfo;
    uname(&systemInfo);
    // 获取设备标识Identifier
    NSString *platform = [NSString stringWithCString:systemInfo.machine encoding:NSUTF8StringEncoding];
    
    // iPhone
    if ([platform isEqualToString:@"iPhone1,1"]) return "iPhone 2G";
    if ([platform isEqualToString:@"iPhone1,2"]) return "iPhone 3G";
    if ([platform isEqualToString:@"iPhone2,1"]) return "iPhone 3GS";
    if ([platform isEqualToString:@"iPhone3,1"]) return "iPhone 4";
    if ([platform isEqualToString:@"iPhone3,2"]) return "iPhone 4";
    if ([platform isEqualToString:@"iPhone3,3"]) return "iPhone 4";
    if ([platform isEqualToString:@"iPhone4,1"]) return "iPhone 4S";
    if ([platform isEqualToString:@"iPhone5,1"]) return "iPhone 5";
    if ([platform isEqualToString:@"iPhone5,2"]) return "iPhone 5";
    if ([platform isEqualToString:@"iPhone5,3"]) return "iPhone 5c";
    if ([platform isEqualToString:@"iPhone5,4"]) return "iPhone 5c";
    if ([platform isEqualToString:@"iPhone6,1"]) return "iPhone 5s";
    if ([platform isEqualToString:@"iPhone6,2"]) return "iPhone 5s";
    if ([platform isEqualToString:@"iPhone7,1"]) return "iPhone 6 Plus";
    if ([platform isEqualToString:@"iPhone7,2"]) return "iPhone 6";
    if ([platform isEqualToString:@"iPhone8,1"]) return "iPhone 6s";
    if ([platform isEqualToString:@"iPhone8,2"]) return "iPhone 6s Plus";
    if ([platform isEqualToString:@"iPhone8,4"]) return "iPhone SE";
    if ([platform isEqualToString:@"iPhone9,1"]) return "iPhone 7";
    if ([platform isEqualToString:@"iPhone9,2"]) return "iPhone 7 Plus";
    if ([platform isEqualToString:@"iPhone10,1"]) return "iPhone 8";
    if ([platform isEqualToString:@"iPhone10,4"]) return "iPhone 8";
    if ([platform isEqualToString:@"iPhone10,2"]) return "iPhone 8 Plus";
    if ([platform isEqualToString:@"iPhone10,5"]) return "iPhone 8 Plus";
    if ([platform isEqualToString:@"iPhone10,3"]) return "iPhone X";
    if ([platform isEqualToString:@"iPhone10,6"]) return "iPhone X";
    if ([platform isEqualToString:@"iPhone11,2"]) return "iPhone XS";
    if ([platform isEqualToString:@"iPhone11,6"]) return "iPhone XS MAX";
    if ([platform isEqualToString:@"iPhone11,8"]) return "iPhone XR";
    if ([platform isEqualToString:@"iPhone12,1"]) return "iPhone 11";
    if ([platform isEqualToString:@"iPhone12,3"]) return "iPhone 11 Pro";
    if ([platform isEqualToString:@"iPhone12,5"]) return "iPhone 11 Pro Max";
    if ([platform isEqualToString:@"iPhone12,8"]) return "iPhone SE (2nd generation)";
    if ([platform isEqualToString:@"iPhone13,1"]) return "iPhone 12 mini";
    if ([platform isEqualToString:@"iPhone13,2"]) return "iPhone 12";
    if ([platform isEqualToString:@"iPhone13,3"]) return "iPhone 12 Pro";
    if ([platform isEqualToString:@"iPhone13,4"]) return "iPhone 12 Pro Max";
    
    
    // iPod
    if ([platform isEqualToString:@"iPod1,1"])  return "iPod Touch 1";
    if ([platform isEqualToString:@"iPod2,1"])  return "iPod Touch 2";
    if ([platform isEqualToString:@"iPod3,1"])  return "iPod Touch 3";
    if ([platform isEqualToString:@"iPod4,1"])  return "iPod Touch 4";
    if ([platform isEqualToString:@"iPod5,1"])  return "iPod Touch 5";
    if ([platform isEqualToString:@"iPod7,1"])  return "iPod Touch 6";
    if ([platform isEqualToString:@"iPod9,1"])  return "iPod Touch 7";
    
    // iPad
    if ([platform isEqualToString:@"iPad1,1"])  return "iPad 1";
    if ([platform isEqualToString:@"iPad2,1"])  return "iPad 2";
    if ([platform isEqualToString:@"iPad2,2"]) return "iPad 2";
    if ([platform isEqualToString:@"iPad2,3"])  return "iPad 2";
    if ([platform isEqualToString:@"iPad2,4"])  return "iPad 2";
    if ([platform isEqualToString:@"iPad2,5"])  return "iPad Mini 1";
    if ([platform isEqualToString:@"iPad2,6"])  return "iPad Mini 1";
    if ([platform isEqualToString:@"iPad2,7"])  return "iPad Mini 1";
    if ([platform isEqualToString:@"iPad3,1"])  return "iPad 3";
    if ([platform isEqualToString:@"iPad3,2"])  return "iPad 3";
    if ([platform isEqualToString:@"iPad3,3"])  return "iPad 3";
    if ([platform isEqualToString:@"iPad3,4"])  return "iPad 4";
    if ([platform isEqualToString:@"iPad3,5"])  return "iPad 4";
    if ([platform isEqualToString:@"iPad3,6"])  return "iPad 4";
    if ([platform isEqualToString:@"iPad4,1"])  return "iPad Air";
    if ([platform isEqualToString:@"iPad4,2"])  return "iPad Air";
    if ([platform isEqualToString:@"iPad4,3"])  return "iPad Air";
    if ([platform isEqualToString:@"iPad4,4"])  return "iPad Mini 2";
    if ([platform isEqualToString:@"iPad4,5"])  return "iPad Mini 2";
    if ([platform isEqualToString:@"iPad4,6"])  return "iPad Mini 2";
    if ([platform isEqualToString:@"iPad4,7"])  return "iPad mini 3";
    if ([platform isEqualToString:@"iPad4,8"])  return "iPad mini 3";
    if ([platform isEqualToString:@"iPad4,9"])  return "iPad mini 3";
    if ([platform isEqualToString:@"iPad5,1"])  return "iPad mini 4";
    if ([platform isEqualToString:@"iPad5,2"])  return "iPad mini 4";
    if ([platform isEqualToString:@"iPad5,3"])  return "iPad Air 2";
    if ([platform isEqualToString:@"iPad5,4"])  return "iPad Air 2";
    if ([platform isEqualToString:@"iPad6,3"])  return "iPad Pro (9.7-inch)";
    if ([platform isEqualToString:@"iPad6,4"])  return "iPad Pro (9.7-inch)";
    if ([platform isEqualToString:@"iPad6,7"])  return "iPad Pro (12.9-inch)";
    if ([platform isEqualToString:@"iPad6,8"])  return "iPad Pro (12.9-inch)";
    if ([platform isEqualToString:@"iPad6,11"])  return "iPad 5";
    if ([platform isEqualToString:@"iPad6,12"])  return "iPad 5";
    if ([platform isEqualToString:@"iPad7,1"])  return "iPad Pro 2(12.9-inch)";
    if ([platform isEqualToString:@"iPad7,2"])  return "iPad Pro 2(12.9-inch)";
    if ([platform isEqualToString:@"iPad7,3"])  return "iPad Pro (10.5-inch)";
    if ([platform isEqualToString:@"iPad7,4"])  return "iPad Pro (10.5-inch)";
    if ([platform isEqualToString:@"iPad7,5"])  return "iPad 6";
    if ([platform isEqualToString:@"iPad7,6"])  return "iPad 6";
    if ([platform isEqualToString:@"iPad7,11"])  return "iPad 7";
    if ([platform isEqualToString:@"iPad7,12"])  return "iPad 7";
    if ([platform isEqualToString:@"iPad8,1"])  return "iPad Pro (11-inch) ";
    if ([platform isEqualToString:@"iPad8,2"])  return "iPad Pro (11-inch) ";
    if ([platform isEqualToString:@"iPad8,3"])  return "iPad Pro (11-inch) ";
    if ([platform isEqualToString:@"iPad8,4"])  return "iPad Pro (11-inch) ";
    if ([platform isEqualToString:@"iPad8,5"])  return "iPad Pro 3 (12.9-inch) ";
    if ([platform isEqualToString:@"iPad8,6"])  return "iPad Pro 3 (12.9-inch) ";
    if ([platform isEqualToString:@"iPad8,7"])  return "iPad Pro 3 (12.9-inch) ";
    if ([platform isEqualToString:@"iPad8,8"])  return "iPad Pro 3 (12.9-inch) ";
    if ([platform isEqualToString:@"iPad11,1"])  return "iPad mini 5";
    if ([platform isEqualToString:@"iPad11,2"])  return "iPad mini 5";
    if ([platform isEqualToString:@"iPad11,3"])  return "iPad Air 3";
    if ([platform isEqualToString:@"iPad11,4"])  return "iPad Air 3";
    
    // 其他
    if ([platform isEqualToString:@"i386"])   return "iPhone Simulator";
    if ([platform isEqualToString:@"x86_64"])  return "iPhone Simulator";
    
    return "unknown";
}

std::string DeviceModel::getDeviceIP(){
    int sockfd = socket(AF_INET, SOCK_DGRAM, 0);
    
    NSMutableArray *ips = [NSMutableArray array];
    
    int BUFFERSIZE = 4096;
    
    struct ifconf ifc;
    
    char buffer[BUFFERSIZE], *ptr, lastname[IFNAMSIZ], *cptr;
    
    struct ifreq *ifr, ifrcopy;
    
    ifc.ifc_len = BUFFERSIZE;
    ifc.ifc_buf = buffer;
    
    if (ioctl(sockfd, SIOCGIFCONF, &ifc) >= 0){
        
        for (ptr = buffer; ptr < buffer + ifc.ifc_len; ){
            
            ifr = (struct ifreq *)ptr;
            int len = sizeof(struct sockaddr);
            
            if (ifr->ifr_addr.sa_len > len) {
                len = ifr->ifr_addr.sa_len;
            }
            
            ptr += sizeof(ifr->ifr_name) + len;
            if (ifr->ifr_addr.sa_family != AF_INET) continue;
            if ((cptr = (char *)strchr(ifr->ifr_name, ':')) != NULL) *cptr = 0;
            if (strncmp(lastname, ifr->ifr_name, IFNAMSIZ) == 0) continue;
            
            memcpy(lastname, ifr->ifr_name, IFNAMSIZ);
            ifrcopy = *ifr;
            ioctl(sockfd, SIOCGIFFLAGS, &ifrcopy);
            
            if ((ifrcopy.ifr_flags & IFF_UP) == 0) continue;
            
            NSString *ip = [NSString  stringWithFormat:@"%s", inet_ntoa(((struct sockaddr_in *)&ifr->ifr_addr)->sin_addr)];
            [ips addObject:ip];
        }
    }
    
    close(sockfd);
    NSString *deviceIP = @"";
    
    for (int i=0; i < ips.count; i++) {
        if (ips.count > 0) {
            deviceIP = [NSString stringWithFormat:@"%@",ips.lastObject];
        }
    }
    return [deviceIP UTF8String];
}

std::string DeviceModel::getDeviceCPU(){
    NSMutableString *cpu = [[NSMutableString alloc] init];
    size_t size;
    cpu_type_t type;
    cpu_subtype_t subtype;
    size = sizeof(type);
    sysctlbyname("hw.cputype", &type, &size, NULL, 0);
    
    size = sizeof(subtype);
    sysctlbyname("hw.cpusubtype", &subtype, &size, NULL, 0);
    // values for cputype and cpusubtype defined in mach/machine.h
    if ((type == CPU_TYPE_X86_64) ||(type == CPU_TYPE_I386)) {
        [cpu appendString:@"x86_64"];
    } else if (type == CPU_TYPE_X86) {
        [cpu appendString:@"x86"];
    } else if (type == CPU_TYPE_ARM) {
        [cpu appendString:@"ARM"];
        switch(subtype)
        {
            case CPU_SUBTYPE_ARM_V6:
                [cpu appendString:@"_V6"];
                break;
            case CPU_SUBTYPE_ARM_V7:
                [cpu appendString:@"_V7"];
                break;
            case CPU_SUBTYPE_ARM_V8:
                [cpu appendString:@"_V8"];
                break;
        }
    } else if (type == CPU_TYPE_ARM64){
        [cpu appendString:@"ARM64"];
        switch(subtype)
        {
            case CPU_SUBTYPE_ARM64_ALL:
                [cpu appendString:@"_ALL"];
                break;
            case CPU_SUBTYPE_ARM64_V8:
                [cpu appendString:@"_V8"];
                break;
        }
    } else{
        return "unknown";
    }
    return [cpu UTF8String];
}

std::string DeviceModel::getDeviceWifiName()
{
    NSString *wifiName = @"none";
    CFArrayRef myArray = CNCopySupportedInterfaces();
    
    if (myArray != nil) {
        
        CFDictionaryRef myDict = CNCopyCurrentNetworkInfo((__bridge CFStringRef)CFArrayGetValueAtIndex(myArray, 0));
        if (myDict != nil) {
            NSDictionary *dict = (NSDictionary*)CFBridgingRelease(myDict);
            wifiName = [dict valueForKey:@"SSID"];
        }
    }
    
    return [wifiName UTF8String];
}


std::string DeviceModel::getDeviceTotalMemory()
{
    mach_port_t host_port;
    mach_msg_type_number_t host_size;
    vm_size_t pagesize;
    host_port =mach_host_self();
    host_size =sizeof(vm_statistics_data_t) / sizeof(integer_t);

    host_page_size(host_port, &pagesize);
    vm_statistics_data_t vm_stat;

    if(host_statistics(host_port,HOST_VM_INFO, (host_info_t)&vm_stat, &host_size) !=KERN_SUCCESS) {

        NSLog(@"Failed to fetch vm statistics");
        return "unknown";
    }

    /* Stats in bytes */
    vm_size_t mem_used = (vm_stat.active_count+
                          vm_stat.inactive_count+
                          vm_stat.wire_count) * pagesize;

    vm_size_t mem_free = vm_stat.free_count* pagesize;

    vm_size_t mem_total = mem_used + mem_free;
    
    return [[ObjcUtils getFileSizeString:mem_total] UTF8String];
}

std::string DeviceModel::getDeviceAvailMemory()
{
    mach_port_t host_port;
    mach_msg_type_number_t host_size;
    vm_size_t pagesize;
    host_port =mach_host_self();
    host_size =sizeof(vm_statistics_data_t) / sizeof(integer_t);

    host_page_size(host_port, &pagesize);
    vm_statistics_data_t vm_stat;

    if(host_statistics(host_port,HOST_VM_INFO, (host_info_t)&vm_stat, &host_size) !=KERN_SUCCESS) {

        NSLog(@"Failed to fetch vm statistics");
        return "unknown";
    }

    vm_size_t mem_free = vm_stat.free_count* pagesize;
    
    return [[ObjcUtils getFileSizeString:mem_free] UTF8String];
}

std::string DeviceModel::getGameUsedMemory()
{
    task_basic_info_data_t taskInfo;
    mach_msg_type_number_t infoCount = TASK_BASIC_INFO_COUNT;
    kern_return_t kernReturn = task_info(mach_task_self(),
                                         TASK_BASIC_INFO,
                                         (task_info_t)&taskInfo,
                                         &infoCount);
    if (kernReturn != KERN_SUCCESS) {
        return "unknown";
    }
    return [[ObjcUtils getFileSizeString:taskInfo.resident_size] UTF8String];
}

std::string DeviceModel::getDeviceAvailInternalStorageSize()
{
    float totalFreeSpace=0.f;
    
    NSError *error = nil;
    NSArray *paths = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);
    NSDictionary *dictionary = [[NSFileManager defaultManager] attributesOfFileSystemForPath:[paths lastObject] error: &error];
    if (dictionary) {
        NSNumber *freeFileSystemSizeInBytes = [dictionary objectForKey:NSFileSystemFreeSize];
        totalFreeSpace = [freeFileSystemSizeInBytes floatValue];
        
    } else {
        NSLog(@"Error Obtaining System Memory Info: Domain = %@, Code = %ld", [error domain], [error code]);

    }
    return [[ObjcUtils getFileSizeString:totalFreeSpace] UTF8String];
}

std::string DeviceModel::getDeviceTotalInternalStorageSize()
{
    float totalSpace;
    
    NSError *error = nil;
    NSArray *paths = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);
    NSDictionary *dictionary = [[NSFileManager defaultManager] attributesOfFileSystemForPath:[paths lastObject] error: &error];
    if (dictionary) {
        NSNumber *fileSystemSizeInBytes = [dictionary objectForKey: NSFileSystemSize];
        totalSpace = [fileSystemSizeInBytes floatValue];
        
    } else {
        NSLog(@"Error Obtaining System Memory Info: Domain = %@, Code = %ld", [error domain], [error code]);

    }
    return [[ObjcUtils getFileSizeString:totalSpace] UTF8String];
}

std::string DeviceModel::getAppSignature()
{
    return "ios";
}

