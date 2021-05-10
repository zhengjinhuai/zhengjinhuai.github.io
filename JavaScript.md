# JavaScript

## 1. this 指向问题

this 的值取决于函数执行的时候

- 作为普通函数被调用，指向 window
- 使用 call、bind、apply，传什么绑定什么
- 作为对象方法被调用，指向对象本身
- 作为类方法被调用，指向类实例本身
- 箭头函数，指向上级作用域

## 2. new 关键字做了什么操作?

1. 在内存中创建一个新对象
2. 新对象内部的[[Prototype]]被赋值为构造函数的 prototype 属性
3. 构造函数内部的 this 被赋值为新对象,即 this 指向新对象
4. 执行构造函数内部代码(给新对象添加属性)
5. 如果构造函数返回非空对象,则返回该对象;否则,返回刚刚创建的新对象

## typeof 运算符

1. 能判断的类型：所有值类型、函数、是否是引用类型

## 3. Promise

### 3.1 概念

- 三种状态：pending（进行中）、fulfilled（已成功）、rejected（已失败）
- JS 异步编程的六种方案：
  - 回调函数 callback
  - 发布-订阅者模式/ 观察者模式
  - Promise/ A+
  - 生成器 Generators/yield
  - Async/Await

## 4. Async / Await

### 4.1. 基本语法

```javascript
async function f() {
  return 'Hey, Jinhuai!'
}
f().then((v) => console.log(v))
```

## 宏任务和微任务

JavaScript 事件分为宏任务和微任务

- 宏任务：setTimeout、setInterval、包括整体代码 script
- 微任务：promise.then 、async/await、process.nextTick(node 中)

EventLoop

- 同步代码一行一行在 call stack 执行
- 遇到异步会记录，等待时机（定时、网络请求）
- 时机到了，移动到 callback queue
- 如果 callback 为空，eventloop 开始工作
- 轮询查找 callback queue，如果有则移动到 call stack 执行
- 继续轮询查找

##　网络请求与远程资源

### AJAX
1. 五种状态
- 0：未初始化，没调用send()
- 1: 载入，已调用send()，正在发送请求
- 2：载入完成
- 3：



### Web Socket

## 内存泄漏

1. 意外的全局变量
2. 闭包引起的内存泄漏
3. 没有清理的 DOM 元素引用
4. 被遗忘的定时器或回调

## 数组的方法及返回值

1. shift()，删除首个数组元素，返回被删除元素
2.

## for...of, forEach

1. forEach 结束循环：throw new Error("结束循环")
