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

##　网络请求与远程资源

### AJAX

### Web Socket

##
