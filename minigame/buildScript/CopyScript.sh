
#!/bin/sh
#------------------
#小游戏仅仅构建代码替换工具脚本
#------------------

#--------------- 项目构建所指向路径
source_folder="D:\Build\mini\wxbuild"

#--------------- Release 完整路径 ---------------
rc_source_path=$source_folder"\wechatgame\src\project.js"
#--------------- debug 完整路径 ---------------
debug_source_path=$source_folder"\wechatgame\src\project.dev.js"

#--------------- 微信开发者工具项目运行所指向路径 ---------------
target_path="D:\Build\mini\wx\wechatgame\engine\src\project.js"


echo "代码复制开始运行..."
#--------------- Debug ---------------
if test -e $debug_source_path
then
	echo "------------本次构建为 Debug 调试模式------------"
	echo $debug_source_path "exist!"
	cp $debug_source_path $target_path
	echo "Debug模式代码复制完毕！"
else
	echo "Debug file doesn't exist"
fi


#--------------- Release ---------------
if test -e $rc_source_path
then
	echo "------------本次构建为 Release 调试模式------------"
	echo $rc_source_path "exist!"
	cp $rc_source_path $target_path
	echo "Release 模式 代码复制完毕！"
else
	echo "Release file doesn't exist"
fi

echo "代码复制完成！！"
exec /bin/bash