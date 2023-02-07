

#引擎相关操作
#如果文件夹不存在创建文件夹
if [ -d "engine" ];then
    echo "文件夹存在"
else
    echo "文件夹不存在"
	mkdir engine
fi

mv adapter-min.js engine
mv ccRequire.js engine
mv cocos engine
mv utils engine
mv game.js engine
mv main.js engine
mv src engine
cp -r assets engine
mv game-backup.js game.js
find assets -name "*.js" -delete
find engine/assets -name "import" |xargs rm -rf
find engine/assets -name "native" |xargs rm -rf
find engine/assets -name "config*.json" -delete

echo "操作结束 Well Done ！"

exec /bin/bash
