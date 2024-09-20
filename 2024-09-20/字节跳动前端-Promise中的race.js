//Promise.race
//promise 的race方法返回一个Promise 在这个Promise中，谁先完成就返回谁的结果
//如果最后一个promise没有完成，那么race的promise就不会完成
promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise1')
    }, 1000);
})
promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise2')
    }, 2000);
})
promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise3')
    }, 2000);
})
Promise.race([promise1, promise2, promise3]).then((value) => {
    console.log(value)
}).catch((err) => {
    console.log("出现了错误", err)
})
//输出结果
//promise1
