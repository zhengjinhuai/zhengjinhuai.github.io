# Exercises

## 手写闭包

```javascript

```

## 关于 async/await、promise 和 setTimeout 执行顺序

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
```
