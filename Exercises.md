# Exercises

## 手写闭包

```javascript

```

## 关于 async/await、promise 和 setTimeout 执行顺序

### 习题一

```javascript
async function async1() {
  console.log('async1 start')
  await async2()
  console.log('asnyc1 end')
}
async function async2() {
  console.log('async2')
}
console.log('script start')
setTimeout(() => {
  console.log('setTimeOut')
}, 0)
async1()
new Promise(function (reslove) {
  console.log('promise1')
  reslove()
}).then(function () {
  console.log('promise2')
})
console.log('script end')

1、执行console.log('script start')，输出script start；
2、执行setTimeout，是一个异步动作，放入宏任务异步队列中；
3、执行async1()，输出async1 start，继续向下执行；
4、执行async2()，输出async2，并返回了一个promise对象，await让出了线程，把返回的promise加入了微任务异步队列，所以async1()下面的代码也要等待上面完成后继续执行;
5、执行 new Promise，输出promise1，然后将resolve放入微任务异步队列；
6、执行console.log('script end')，输出script end；
7、到此同步的代码就都执行完成了，然后去微任务异步队列里去获取任务
8、接下来执行resolve（async2返回的promise返回的），输出了async1 end。
9、然后执行resolve（new Promise的），输出了promise2。
10、最后执行setTimeout，输出了settimeout。
```

参考链接：[关于 async/await、promise 和 setTimeout 执行顺序](https://blog.csdn.net/yun_hou/article/details/88697954)

### 习题二

在 nodejs 中运行

```javascript
setTimeout(() => console.log(2))
// process.nextTick(() => console.log(3))
Promise.resolve().then(() => console.log(4))
function f1() {
  return new Promise((resolve) => {
    console.log(5)
    resolve()
    console.log(6)
  })
}

async function f2() {
  console.log(7)
  await f1()
  console.log(8)
}
f2()

第一轮循环：
1. setTimeout加入宏任务，记为setTimeout1
2. process微任务，加入微任务队列记为process1
3. promise.then微任务，加入微任务队列，记为then1
4. 执行f2()，打印7，再执行f1()，new Promise里面直接打印5 6

第一轮循环打印：7 5 6
当前宏任务队列：setTimeout1
当前微任务队列：process1、then1、then2

第二轮循环：
1. 执行所有微任务
2. 执行process1，打印3
3. 执行then1，打印4
4. 再打印8
5. 执行宏任务setTimeout1，打印2

第一轮循环打印：3 4 8 2

最终结果：7 5 6 3 4 8 2
```

参考链接：[对微任务和宏任务的执行顺序的个人理解](https://zhuanlan.zhihu.com/p/257069622)
