import { ArrayTool, readableNum } from "../assets/script/utils/Utils";

test('readableNum', () => {
    expect(readableNum(1000)).toBe('1,000');
    expect(readableNum(10000)).toBe('10,000');
    expect(readableNum(416506250)).toBe('416,506,250');
    expect(readableNum(416506250, '.')).toBe('416.506.250');
    expect(readableNum(416506250, '')).toBe('416506250');
    expect(readableNum(-600 * 1000, '.')).toBe('-600.000');
    expect(readableNum(-600 * 1000 * 1000, '.')).toBe('-600.000.000');
    expect(readableNum(-121892262728, '.')).toBe('-121.892.262.728');
    expect(readableNum(0)).toBe('0');
});


test("测试数组移除", () => {
    expect(ArrayTool.fastRemoveArrayItemAt([1,2,3], 0)).toBe(true);
    expect(ArrayTool.fastRemoveArrayItemAt([1,2,3], 4)).toBe(false);
    expect(ArrayTool.fastRemoveArrayItemAt([1,2,3], -1)).toBe(false);
});