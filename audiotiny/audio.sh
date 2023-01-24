#!/bin/bash
# http://ffmpeg.org/download.html to get binary distribution for ogg codex


usage()
{
    echo """
    Usage:
    Script to compress audio resource for distribution!

    -s <path to source dir>
    -d <path to dest dir>
    """
}

#跳转到上一级目录
curpath=$(cd "$(dirname "$0")/"; pwd)

res_path=""
des_path=""
while getopts ":s::d:" opt
do
    case $opt in
        s ) res_path=$OPTARG;;
        d ) des_path=$OPTARG;;
        ? ) echo "invalid param"
            exit 1;;
    esac
done

if [[ ${#res_path} -eq 0 ]]; then
    #statements
    usage
    exit 1
fi

if [[ ${#des_path} -eq 0 ]]; then
    des_path="mp3"
fi

if [[ ! -d ${des_path} ]];then
    mkdir ${des_path}
else
    echo "clean directory ${des_path}.."
    rm ${des_path}/*
    echo "clean done!~"
fi

CMD_MUSIC="$curpath/bin/ffmpeg -i"

echo "processing music..."


function audioMin(){
    f=$1
    file="${f##[./0-9a-zA-Z_-]*/}"
    res_folder=${f%/*}
    dist_folder=${res_folder/$res_path/$des_path}
    dst="${f/$res_path/$des_path}"
    if [ ! -d ${dist_folder} ];then
        echo "${dist_folder} 文件夹不存在"
        mkdir "${dist_folder}"
    else
        echo "文件夹存在"
    fi
    echo "Convert: ${f} ======>  ${dst}..."
    # ${CMD_MUSIC} ${f} -vn -ar 44100 -ac 2 -ab 128000 -f mp3 ${dst}
    ${CMD_MUSIC} "${f}" -vn -ar 22050 -ac 1 -ab 128 -f mp3 "${dst}"
        if [[ $? -eq 0 ]]; then
            #statements
            echo "done!~"
        else
            echo "${f} failed!~"
    fi
}

function read_dir(){
    for file in `ls $1 | tr " " "\?"`       #注意此处这是两个反引号，表示运行系统命令
    do
        file=`tr "\?" " " <<<$file`
        if [ -d $1"/""$file" ]  #注意此处之间一定要加上空格，否则会报错
        then
            read_dir $1"/""$file"
        else
            #echo "$1$file"   #在此处处理文件即可
            res="${file##*.}" # 获取后缀名为 MP3的
            if [ "${file##*.}" = "mp3" ] || [ "${file##*.}" = "MP3" ]; then
               echo "-------------$1$file"
               audioMin "$1$file"
            fi
        fi
    done
}
#读取第一个参数
read_dir $res_path





function audioMinBack(){
for f in `ls ${res_path}/*.mp3 | tr " " "\?"`
    do
        f=`tr "\?" " " <<<$f`
        echo "convert ${f}..."
        # dst="${des_path}/${f##[./0-9a-zA-Z_-]*/}"
        file="${f##[./0-9a-zA-Z_-]*/}"
        dst="${des_path}/${file%.*}.mp3"

        echo "convert ${f} to ${dst}..."
        # ${CMD_MUSIC} ${f} -vn -ar 44100 -ac 2 -ab 128000 -f mp3 ${dst}
        ${CMD_MUSIC} "${f}" -vn -ar 22050 -ac 1 -ab 128 -f mp3 "${dst}"
        if [[ $? -eq 0 ]]; then
            #statements
            echo "done!~"
        else
            echo "${f} failed!~"
        fi
    done
}

echo "music done!~"
echo "--------------------Well Done--------------------------------"

exec /bin/bash