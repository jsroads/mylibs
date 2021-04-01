
# 复制 copyDirName 文件夹内的 json 文件 到另一个文件夹
import os
import sys

# 自己的本地地址
targetPath = "/Users/smile/work/ccc/game"
# 复制的文件夹夹名字
copyDirName = "dist"
replaceList = ['var $protobuf = require("protobufjs/minimal");',
               'import * as $protobuf from "protobufjs/minimal";',
               'const $root = $protobuf.roots.creator3 || ($protobuf.roots.creator3 = {});',
               'export const mykj',
               'module.exports = $root;']
replaceEndStr = 'const $protobuf = protobuf;'
globalStr = 'const $root = $protobuf.roots.creator3 || ($protobuf.roots.creator3 = $util.global);'
def copyFiles(sourceF, targetF):
    targetDir = os.path.split(targetF)[0]
    # 如果路径不存在 创建目录
    if not os.path.exists(targetDir):
        os.makedirs(targetDir)
    if os.path.isfile(sourceF):
        open(targetF, "wb").write(open(sourceF, "rb").read())
    if os.path.isdir(sourceF):
        copyFiles(sourceF, targetF)
def changeRequrePath():
    try:
        gamePath = os.getcwd()  # 获取当前目录路径
        gamePath = os.path.join(gamePath, copyDirName, "bufBundle.js")
        f = open(gamePath, "r")
        data_list = f.readlines()
        file_data = ""
        for line in data_list:
            if replaceList[0] in line:
                print("找到--语法是--ES5")
                line = line.replace(replaceList[0], replaceEndStr)
            if replaceList[1] in line:
                print("找到--语法是--ES6")
                line = line.replace(replaceList[1], replaceEndStr)
            if replaceList[2] in line:
                print("替换全局对象 global")
                line = line.replace(replaceList[2], globalStr)
            if replaceList[3] in line:
                print("删除导出模块 mykj ！！")
                line = line.replace(replaceList[3], 'const mykj')
            if replaceList[4] in line:
                print("删除导出模块 $root ！！")
                line = line.replace(replaceList[4], '')
            file_data += line
        with open(gamePath, "w", encoding="utf-8") as f:
            f.write(file_data)
        print("------bufBundle.js 更换完毕-----")
    finally:
        if f:
            f.close()
    # 修改声明文件
    try:
        tsdPath = os.getcwd()  # 获取当前目录路径
        tsdPath = os.path.join(tsdPath, copyDirName, "bufBundle.d.ts")
        tsdf = open(tsdPath, "r")
        data_list = tsdf.readlines()
        starLine = 0
        data_list.insert(starLine, "declare global {\n")
        data_list.append("}\n")
        data_list.append("export { mykj as default };")
        tsdf = open(tsdPath, 'w')
        tsdf.writelines(data_list)
        tsdf.flush()
        print("------bufBundle.d.ts 更换完毕-----")
    finally:
        if tsdf:
            tsdf.close()
def worksFiles():
    file_dir = os.getcwd()  # 获取当前目录路径
    file_dir = os.path.join(file_dir, copyDirName)
    file_list = os.listdir(file_dir)
    print("复制路径：",targetPath)
    print("源目录：",file_dir)
    pardir = targetPath
    for filename in file_list:
        print("filename", filename)
        portion = os.path.splitext(filename)
        if portion[1] == ".js" or portion[1] == ".ts":
            sun_source_path = os.path.join(file_dir, filename)
            target_path = os.path.join(pardir, "assets", "protobuf", "dist", filename)
            print("复制路径", sun_source_path)
            print("源目录：", target_path)
            copyFiles(sun_source_path, target_path)
    print("复制完毕！！")

if __name__ == "__main__":
    args = sys.argv  # 获取参数
    print(sys.argv)
    if len(sys.argv) > 1:
        targetPath = args[1]
    changeRequrePath()
    worksFiles()