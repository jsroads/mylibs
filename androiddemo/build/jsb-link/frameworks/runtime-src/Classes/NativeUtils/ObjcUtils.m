//
//  ObjcUtils.m
//  poker-mobile
//
//  Created by 宋怡博 on 06/08/2021.
//

#import "ObjcUtils.h"

@implementation ObjcUtils
+ (NSString *)getFileSizeString:(CGFloat)size
{
    if (size>1024*1024*1024){
        return [NSString stringWithFormat:@"%.1fG",size/1024/1024/1024];//大于1G，则转化成G单位的字符串
    }
    else if(size<1024*1024*1024&&size>=1024*1024)//大于1M，则转化成M单位的字符串
    {
        return [NSString stringWithFormat:@"%.1fM",size/1024/1024];
    }
    else if(size>=1024&&size<1024*1024) //不到1M,但是超过了1KB，则转化成KB单位
    {
        return [NSString stringWithFormat:@"%.1fK",size/1024];
    }
    else//剩下的都是小于1K的，则转化成B单位
    {
        return [NSString stringWithFormat:@"%.1fB",size];
    }
}

@end
