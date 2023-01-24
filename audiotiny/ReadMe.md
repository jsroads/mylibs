# 压缩文件夹内MP3

## 循环遍历压缩

首先使用的是 `audio.sh` 压缩 输出 

```shell
audio.sh -s 素材文件夹 -d 导出文件夹
```

比如 

```shell
audio.sh -s src -d out
```

## 目录比较复制

本操作 主要使用 `CopyDiffSize.py` 操作

```shell
python3 CopyDiffSize.py 压缩后目录 要覆盖目录
```

例如：

```shell
python3 CopyDiffSize.py out Sounds
```

