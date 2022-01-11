### 原理

1. 实现借鉴了论坛两位大佬的思路结合，依赖 cc.Slider组件实现。

2. 然后设置对应的进度

3. 如果是列表滑动，添加滑动监听函数，实现同步进度。

4. 是否乘以-1 根据自己的`scrollView`的`content`的`anchorX` 等因素决定，这里是从左到右 `anchorX` 是`0` 所以这样写。

   ## 参考

   - [Cocos creator scrollbar支持拖动滑块来滚动scrollview吗](https://forum.cocos.org/t/cocos-creator-scrollbar-scrollview/39333)
   - [CocosCreatorExtra](https://github.com/dengxiaochun/CocosCreatorExtra)
   - 3.x 实现 [cccscrollbar.zip](https://forum.cocos.org/uploads/short-url/jcEvb835DsRG8vnMkS2DxhlzOrG.zip) 
