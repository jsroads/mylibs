/**
 * Created by jsroads on 2024/6/25 21:04
 * Note:
 */
export function logPerformance(target, name, descriptor) {
    const original = descriptor && descriptor.value;
    if (typeof original === "function") {
        descriptor.value = function (...args) {
            const start = typeof performance !== 'undefined' ? performance.now() : Date.now();

            try {
                const result = original.apply(this, args);

                // 处理同步方法
                if (result && typeof result.then === "function") {
                    return result.then((res) => {
                        const end = typeof performance !== 'undefined' ? performance.now() : Date.now();
                        console.log("🥰", end - start);
                        return res;
                    }).catch((err) => {
                        const end = typeof performance !== 'undefined' ? performance.now() : Date.now();
                        console.log("🥰", end - start);
                        throw err;
                    });
                } else {
                    const end = typeof performance !== 'undefined' ? performance.now() : Date.now();
                    console.log("🥰", end - start);
                    return result;
                }
            } catch (e) {
                const end = typeof performance !== 'undefined' ? performance.now() : Date.now();
                console.log("🥰", end - start);
                throw e;
            }
        };
    }
    return descriptor;
}
