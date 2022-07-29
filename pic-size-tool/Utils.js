
let Utils = {
    // 字节数转换为MB
    byte2Mb(byte) {
        return byte / (1024 * 1024);
    },
    // 字节数转换为按MB表示的字符串，保留小数点后4位
    byte2MbStr(byte) {
        return this.byte2Mb(byte).toFixed(4);
    },
    // 字节数转换为KB
    byte2Kb(byte) {
        return byte / 1024;
    },
    // 字节数转换为按KB表示的字符串，保留小数点后2位
    byte2KbStr(byte) {
        return this.byte2Kb(byte).toFixed(2);
    },
};
module.exports = Utils;