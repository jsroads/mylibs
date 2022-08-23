/**
 * Created by jsroads on 2022/8/23 12:17
 * Note:
 */
export default {
    input: './src/index.js', //输入 打包的文件
    output: [{  //输出 编译后文件
        file: './dist/async-cjs.js', //文件名
        format: 'cjs', //打包规范
        exports: 'named',
        banner: '// jsroads libs',  //头注释
        footer: '// powered by jsroads' //尾注释
    }, {
        file: './dist/async-es.js',
        format: 'esm',
        exports: 'named',
        banner: '// jsroads libs',  //头注释
        footer: '// powered by jsroads' //尾注释
    }]
}