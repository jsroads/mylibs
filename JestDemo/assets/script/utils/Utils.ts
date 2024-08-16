/**
 * Created by jsroads on 2024/8/16 11:35
 * Note:
 */
export class ArrayTool {
    static fastRemoveArrayItemAt(array, index) {
        if (array) {
            let length = array.length;
            if (index < 0 || index >= length) {
                return false;
            }
            array[index] = array[length - 1];
            array.length = length - 1;
        }
        return true;
    }

}

/**
 * 分割字符串
 * @param str   将会被分割的字符串
 * @param charCount 每 `charCount` 个会被分割
 * @param divChar 分割字符。
 */
function division(str: string, charCount: number, divChar: string = ',') {
    const chars: string[] = [];
    let count = 0;
    for (let i = str.length - 1; i >= 0; --i) {
        chars.push(str[i]);

        count++;
        if (count % charCount == 0 && i !== 0) {
            chars.push(divChar);
        }
    }

    const result = chars.reverse().join('');
    return result;
}


/**
 * 使数字可读。如：1004213 -> '1,004,213'
 * @param number
 * @param divChar 分割字条符
 */
export function readableNum(number: number, divChar = ',') {
    if (String(number).length <= 3) {
        return String(number);
    }

    if (number < 0) {
        return '-' + division(String(-1 * number), 3, divChar);
    }

    return division(String(number), 3, divChar);
}