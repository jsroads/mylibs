import os
import shutil
import sys
import time
import math

copyFileCounts = 0
sourceFileTotalSize = 0
targetFileTotalSize = 0
def copyFiles(sourceDir, targetDir):
    global copyFileCounts
    global sourceFileTotalSize
    global targetFileTotalSize
    print (u"%s 当前处理文件夹 %s 已处理 %s 个文件" %(time.strftime('%Y-%m-%d %H:%M:%S',time.localtime(time.time())), sourceDir,copyFileCounts))
    for f in os.listdir(sourceDir):
        sourceF = os.path.join(sourceDir, f)
        targetF = os.path.join(targetDir, f)
        if os.path.isfile(sourceF):
            if os.path.exists(targetF):
                srcSize = os.stat(sourceF).st_size
                dstSize = os.stat(targetF).st_size
                # 误差 1kb内的 忽略
                if (srcSize + 1024) < dstSize:
                    sourceFileTotalSize += srcSize
                    targetFileTotalSize += dstSize
                    os.remove(targetF)
                    print(f, "比较前后", srcSize / 1024, "KB", " ======> ", dstSize / 1024, "KB", "-----覆盖")
                    shutil.copy2(sourceF, targetF)
                    copyFileCounts += 1
                else:
                    print(f, "比较前后", srcSize / 1024, "KB", " ======> ", dstSize / 1024, "KB","-----文件比目标文件大倍忽略")
        if os.path.isdir(sourceF):
            copyFiles(sourceF, targetF)
def copyDir(src, dst):
    names = os.listdir(src)
    for name in names:
        srcname = os.path.join(src, name)
        dstname = os.path.join(dst, name)
        if os.path.exists(dstname):
            srcSize = os.stat(srcname).st_size
            dstSize = os.stat(dstname).st_size
            if srcSize < dstSize:
                os.remove(dstname)
                print(name, "比较前后", srcSize / 1024, "KB", " ======> ", dstSize / 1024, "KB","-----覆盖")
                shutil.copy2(srcname, dstname)
            else:
                print(name,"比较前后",srcSize/1024,"KB" ," ======> ",dstSize/1024,"KB","-----文件比目标文件大倍忽略" )
        else:
            shutil.copy2(srcname, dstname)


def print_hi(name):
    # Use a breakpoint in the code line below to debug your script.
    print(f'Hi, {name}')  # Press Ctrl+F8 to toggle the breakpoint.


# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    print_hi('PyCharm')
    args = sys.argv
    if len(args) < 3:
        print("param length error")
        sys.exit()
    src_path = args[1]
    dst_path = args[2]
    copyFiles(src_path,dst_path)
    # copyDir(src_path,dst_path)
    print(u"%s 复制完毕 总共处理%s 个文件" % (time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(time.time())), copyFileCounts))
    reValue = math.floor((targetFileTotalSize-sourceFileTotalSize)/1024)
    print("处理前后", targetFileTotalSize / 1024, "KB", " ======> ", sourceFileTotalSize / 1024, "KB 压缩掉了",reValue,"KB")