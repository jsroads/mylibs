# coding:utf-8
import os
import re
import time
import json
import shutil
from time import strftime,gmtime
from optparse import OptionParser

CONST = {
    "LOG_FILE": ".log", # 保存日志的文件名
    # 正则
    "REGEX":{
        "COMMIT": "^commit",
        "AUTHOR": "^Author",
        "DATE": "^Date",
        "Merge": "^Merge",
        "#": "#",#Merge 代码内容不显示
    }
}
gAfter = "" # 开始时间
gBefore = "" # 结束时间
# 获取git日志
def getGitLog():
    global gAfter
    global gBefore
    global gDays
    cwd = os.getcwd()
    configPath = os.path.join(cwd, "config.json")
    f = open(configPath, encoding='utf-8')  # 打开‘copyConfig.json’的json文件
    res = f.read()  # 读文件
    author = json.loads(res)["author"]
    log_paths = json.loads(res)["log_paths"]
    source_path = json.loads(res)["source_path"]
    cmd1 = ""
    cmd2 = ""
    today_date = time.strftime("%Y-%m-%d", time.localtime())
    my_file_name = today_date+CONST["LOG_FILE"]
    # 默认为今天的时间
    if gAfter == None and gBefore == None and gDays ==None:
        nowTime = strftime("%Y-%m-%d", gmtime())
        cmd1 = "{0}".format(source_path)
        cmd2 = "git log --author=\"{0}\" --after=\"{1} 00:00:00\" --before=\"{2} 24:00:00\" > {3}/{4}".format(author, nowTime, nowTime, getRunPath(), my_file_name)
    elif gDays:
        ticks = time.time()
        timeStamp = ticks-int(gDays)*24*60*60
        localtime = time.strftime("%Y-%m-%d", time.localtime(timeStamp))
        my_file_name = localtime+CONST["LOG_FILE"]
        cmd1 = "{0}".format(source_path)
        cmd2 = "git log --author=\"{0}\" --after=\"{1} 00:00:00\" --before=\"{2} 24:00:00\" > {3}/{4}".format(author, localtime, localtime, getRunPath(), my_file_name)
    # 根据参数的时间
    else:
        cmd1 = "{0}".format(source_path)
        cmd2 = "git log --author=\"{0}\"".format(author)
        if gBefore:
            cmd2 = "{0} --before=\"{1}\"".format(cmd2, gBefore)
        if gAfter:
            cmd2 = "{0} --after=\"{1}\"".format(cmd2, gAfter)
        my_file_name = gAfter+CONST["LOG_FILE"]
        cmd2 = "{0} > {1}/{2}".format(cmd2, getRunPath(), my_file_name)
    print("执行命令：{}".format(cmd2))
    os.chdir(cmd1)
    os.system(cmd2)
    parseLog(my_file_name,log_paths)
#获取运行目录
def getRunPath():
   return os.path.split(os.path.realpath(__file__))[0]

# 解析日志
def parseLog(my_file_name,log_paths):
    print("================LOG====================")
    logPath = getRunPath() + "/" + my_file_name
    savePath = log_paths + "/" + my_file_name
    tempPath = getRunPath() + "/temp"
    if not os.path.exists(tempPath):
        os.makedirs(tempPath)
    if not os.path.exists(log_paths):
        os.makedirs(log_paths)
    saveFile = open(savePath,"w+")
    saveFile.writelines("今日工作内容：\n")
    idx = 1
    logFile = open(logPath, 'r', encoding='utf-8')
    for line in logFile:
        line = line.strip()
        if len(line) == 0:
            continue
        reCommit = re.match(CONST["REGEX"]["COMMIT"], line)
        reAuthor = re.match(CONST["REGEX"]["AUTHOR"], line)
        reDate = re.match(CONST["REGEX"]["DATE"], line)
        reMerge = re.match(CONST["REGEX"]["Merge"], line)
        reSpec = re.match(CONST["REGEX"]["#"], line)

        if reCommit or reAuthor or reDate or reMerge or reSpec:
            continue
        else:
            print(line)
            saveFile.writelines(str(idx)+"."+line+"\n")
            idx = idx+1
    saveFile.close()
    logFile.close()
    shutil.move(logPath,tempPath+"/"+my_file_name)
    print("=======================================")
    print("汪~赶快粘贴到每天的日报吧^_^")

if __name__ == '__main__':
    # 进行参数解析
    parser = OptionParser()
    parser.add_option(
        "--after",
        action="store",
        dest="after",
        help="开始时间(如果after和before都不填写，默认为当天时间)"
    )
    parser.add_option(
        "--before",
        action="store",
        dest="before",
        help="结束时间(如果after和before都不填写，默认为当天时间)"
    )
    parser.add_option(
        "--days",
        action="store",
        dest="days",
        help="距离当前日期的天数(比如1代表昨天，2代表前天)"
    )
    (opts, args) = parser.parse_args()
    gAfter = opts.after
    gBefore = opts.before
    gDays = opts.days
    getGitLog()

