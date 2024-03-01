/*
 * @Description: 
 * @Author: jsroads
 * @Date: 2023/10/17 10:46
 */
declare namespace cc {
    interface CCLocalStorage {
        getItem(key: string): string | null;
        setItem(key: string, value: string): void;
        removeItem(key: string): void;
        clear(): void;
        key(index: number): string | null;
        readonly length: number;
    }
}