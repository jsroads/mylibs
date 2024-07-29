## 使用说明

1. 使用 node hot-main.js 运行脚本

```shell
node hot-main.js
```

2. 依次输入相关的提示目录
3. 等待生成结果

```shell
Last login: Sat Jul 27 14:26:43 on ttys000
YDC012deMac-mini~/TestCase/node/hot-cdn(:|✔) % node hot-main.js
请输入上一个版本的remote目录路径: /Users/ydc012/Downloads/old
请输入当前要热更版本的remote目录路径: /Users/ydc012/Downloads/new
请输入要分类的后缀名（多个后缀用逗号分隔，直接回车统计所有后缀）:
请输入排序规则 (默认从大到小排序，输入N从小到大排序):
请输入要添加的URL前缀: https://cdnminigame.lightlygame.com/tcs/mini/wx/publish/wechatgame_release/remote
已清空目录: output
(node:50982) [DEP0147] DeprecationWarning: In future versions of Node.js, fs.rmdir(path, { recursive: true }) will be removed. Use fs.rm(path, { recursive: true }) instead
(Use `node --trace-deprecation ...` to show where the warning was created)
YDC012deMac-mini~/TestCase/node/hot-cdn(:|✔) %
```

