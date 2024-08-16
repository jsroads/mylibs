module.exports = {
    preset: "ts-jest",         // 如果是 js 工程，则是 "jest"
    collectCoverageFrom: ['<rootDir>/assets/**/*.ts'],
    testEnvironment: 'node',   // 测试代码所运行的环境
    // verbose: true,          // 是否需要在测试时输出详细的测试情况
    rootDir: "./test",         // 测试文件所在的目录
    globals: {                 // 全局属性。如果你的被测试的代码中有使用、定义全局变量，那你应该在这里定义全局属性
        window: {},
        cc: {}
    }
};