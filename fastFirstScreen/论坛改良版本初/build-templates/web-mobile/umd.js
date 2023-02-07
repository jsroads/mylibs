console.log("测试打点！！！")
//一个简单的demo
window.aplus_queue.push({
    action: 'aplus.record',
    arguments: ['login', 'CLK', {
        param1: '111',
        param2: '222',
        param3: 333
    }]
});