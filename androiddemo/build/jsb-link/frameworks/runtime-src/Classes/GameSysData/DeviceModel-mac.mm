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
#import <AppKit/NSPasteboard.h>
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
    return "App Simulator";
}

std::string DeviceModel::getDeviceModel()
{
    struct utsname systemInfo;
    uname(&systemInfo);
    return systemInfo.machine;
}

std::string DeviceModel::getPackageName()
{
    return "";
}

std::string DeviceModel::makePackageName()
{
    return "";
}

bool DeviceModel::cheackPath(const char *destPath)
{
    return false;
}

std::string DeviceModel::getWritablePath2()
{
    return "";
}

std::string DeviceModel::getObbPath()
{
    return "";
}

std::string DeviceModel::getApkPath()
{
    return "";
}

//获取ios的粘贴板
bool DeviceModel::setStringToPasteBoard(const char* str)
{
    NSPasteboard *aPasteboard = [NSPasteboard generalPasteboard]; //获取粘贴板对象
    [aPasteboard clearContents]; //清空粘贴板之前的内容
    NSData *aData = [[NSString stringWithUTF8String:str] dataUsingEncoding:NSUTF8StringEncoding];
    [aPasteboard setData:aData forType:NSPasteboardTypeString];
    return true;
}

std::string DeviceModel::getAppName(){
    return "极简卡牌";
}

//获取ios的系统版本
std::string DeviceModel::getSystemVersion()
{
    return "1.0.0";
}

std::string DeviceModel::getDeviceIdentifier(){
    
    return "App Simulator";
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
    return "";
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
