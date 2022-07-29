#!/bin/sh
#------------------
#小游戏完整构建代码替换工具脚本
#------------------

# 首屏相关 把远程资源挪出去

#------------------ 微信开发者运行项目父目录
project_wx="wx"
#------------------ Cocos Creator构建路径 
build_wx="wxbuild"


#------------------ 工具打开CDN资源对应本地目录
project_wx_cdn_res=$project_wx"/res"

#------------------ 工具打开项目根目录
project_wx_game=$project_wx"/wechatgame"
#------------------ Cocos Creator构建路径
wxbuild_path=$build_wx"/wechatgame"

if [ -d $project_wx_cdn_res ]
then
	echo "准备删除原"$project_wx_cdn_res"..."
	rm -rf $project_wx_cdn_res
	echo $project_wx_cdn_res"删除完毕！"
fi

if [ -d $project_wx_game ]
then
	rm -rf $project_wx_game
	echo $project_wx_game"存在删除..."
fi

if [ -d $wxbuild_path ]
then
	echo "开始复制"$wxbuild_path" 到 "$project_wx_game"..."
	cp -a $wxbuild_path $project_wx
	echo "文件夹复制操作结束准备下一步工作..."

	sleep 1s
	
	#source ./wx/wechatgame/autorun.sh
	if [ -d $project_wx"/res" ]
	then
		rm -rf $project_wx"/res"
		echo $project_wx"文件夹存在删除..."
	fi
	
	mv $project_wx_game"/res" $project_wx"/res"
	
	mv $project_wx_game"/res_internal" $project_wx_game"/res"
	
	if [ -d $project_wx_game"/engine" ]
	then
		echo $project_wx_game"文件夹已经存在，无需新建"
	else
		mkdir $project_wx_game"/engine"
		echo $project_wx_game"/engine文件夹不存在，新建文件夹..."
	fi
	
	if test -e  $project_wx_game"/adapter-min.js"
	then
		mv $project_wx_game"/adapter-min.js" $project_wx_game"/engine"
	fi
	
	if test -e  $project_wx_game"/adapter.js"
	then
		mv $project_wx_game"/adapter.js" $project_wx_game"/engine"
	fi
	mv $project_wx_game"/ccRequire.js" $project_wx_game"/engine"
	mv $project_wx_game"/game.js" $project_wx_game"/engine"
	mv $project_wx_game"/main.js" $project_wx_game"/engine"
	mv $project_wx_game"/src" $project_wx_game"/engine"
	mv $project_wx_game"/GameBackup.js" $project_wx_game"/game.js"
	sed -i 's/cocos\/cocos2d-js-min.js/..\/cocos\/cocos2d-js-min.js/g' $project_wx_game\/engine\/game.js
	
	echo "首屏操作OK！"
	echo "微信小游戏全部操作结束，打开工具调试吧！"
else
    echo $wxbuild_path"不存在"
	#mkdir $build_wx
fi

exec /bin/bash
