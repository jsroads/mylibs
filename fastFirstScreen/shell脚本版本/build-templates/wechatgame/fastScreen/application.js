/**
 * Created by jsroads on 2022/6/10 10:23
 * Note: 引擎加载 修改为 小游戏推荐的方式
 * @see https://developers.weixin.qq.com/minigame/dev/reference/api/exports.html
 */
function loadEngine(name, callback) {
  if (wx.loadSubpackage) {
    return loadSubRes(name, callback).then((res) => {
      if (!res) {
        loadEngine(name, callback);
      } else {
        Promise.resolve(res);
      }
    });
  } else {
    let res = require(name + "/game.js");
    return Promise.resolve(res);
  }
}

function loadSubRes(name, callback) {
  return new Promise((resolve, reject) => {
    const t = new Date().getTime();
    const loadTask = wx.loadSubpackage({
      name: name,
      success: function (res) {
        console.log("引擎子包加载完毕", new Date().getTime() - t, "ms");
        resolve(true);
      },
      fail: function (res) {
        console.log("引擎子包加载失败", new Date().getTime() - t, "ms");
        resolve(false);
      }
    });
    loadTask.onProgressUpdate(res => {
      callback && callback(res);
    });
  });
}

function applicationStart(_ref) {
  const findCanvas = _ref.findCanvas;
  findCanvas && findCanvas();
  return Promise.resolve();
}

exports.loadEngine = loadEngine;
exports.applicationStart = applicationStart;