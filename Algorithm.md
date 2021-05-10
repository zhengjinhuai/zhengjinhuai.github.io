# Algorithm

## 将数组转换成树

将输入的数组组装成一颗树状的数据结构，时间复杂度越小越好

```javascript

```

## 数组扁平化

> [js5 种方式实现数组扁平化](https://www.cnblogs.com/chenhuichao/p/13564682.html)

1. reduce

- 遍历数组，若为数组则递归遍历，否则直接 concat
- reduce 是数组方法，将数组的每个值传入一个 function 里面进行规约，最终计算为一个值
- 第一个参数为 function，第二个参数为初始值
- function 中第一个参数为返回值，第二个参数为数组中的值

```javascript
function flatten(arr) {
  return arr.reduce((result, item) => {
    return result.concat(Array.isArray(item) ? flatten(item) : item)
  }, [])
}
```

4. 递归遍历

```javascript
function flatten(arr) {
  var res = []
  arr.map((item) => {
    if (Array.isArray(item)) {
      res = res.concat(flatten(item))
    } else {
      res.push(item)
    }
  })
  return res
}
```

## 深拷贝

- JSON.parse(JSON.stringify())
- 函数库 lodash 的\_.cloneDeep()方法
- .jQuery.extend()

```javascript
function deepClone(obj = {}) {
  if (typeof obj !== 'object' || obj == null) {
    return obj
  }
  let result
  if (obj instanceof Array) {
    result = []
  } else {
    result = {}
  }
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key])
    }
  }
  return result
}
```

## 鼠标拖拽事件

- 主要是 down、up、move 事件对象，div 绑定 onmousedown 和 up 事件、window 设置 move 事件
- 通过 clientX 和 clientY 获取 x 和 y 的坐标
- 通过 offsetLeft 和 offsetTop 获取左部和顶部的偏移量
- 设置拖拽 flag，为 true 计算拖拽坐标
- style.left = window 的 clientX 加上原先的左部偏移量 减去之前 x 坐标

```javascript
//获取元素
var dv = document.getElementById('dv')
var x = 0
var y = 0
var l = 0
var t = 0
var isDown = false
//鼠标按下事件
dv.onmousedown = function (e) {
  //获取x坐标和y坐标
  x = e.clientX
  y = e.clientY

  //获取左部和顶部的偏移量
  l = dv.offsetLeft
  t = dv.offsetTop
  //开关打开
  isDown = true
  //设置样式
  dv.style.cursor = 'move'
}
//鼠标移动
window.onmousemove = function (e) {
  if (isDown == false) {
    return
  }
  //获取x和y
  var nx = e.clientX
  var ny = e.clientY
  //计算移动后的左偏移量和顶部的偏移量
  var nl = nx - (x - l)
  var nt = ny - (y - t)

  dv.style.left = nl + 'px'
  dv.style.top = nt + 'px'
}
//鼠标抬起事件
dv.onmouseup = function () {
  //开关关闭
  isDown = false
  dv.style.cursor = 'default'
}
```

## 简单

### 求最大公约数

1. 辗转相除法

```python
def gcd(m, n):
    while n:
        r = m % n
        m = n
        n = r
    return m
```

2. 冒泡排序

```python
def bubbleSort(arr):
  n = len(arr)
  for i in range(n):
    flag = True
    for j in range(n-1-i):
      if arr[j] > arr[j+1]
      arr[j], arr[j+1] = arr[j+1], arr[j]
      flag = False
    if flag:
      break
  return arr
```

## 手撕代码系列

> [32 个手写 JS，巩固你的 JS 基础（面试高频）](https://juejin.cn/post/6875152247714480136#heading-41)

### 图片懒加载

```javascript
function lazyload() {
  const imgs = document.getElementByTagName('img')
  const len = imgs.length
  // 视口的高度
  const viewHeight = document.documentElement.clientHeight
  // 滚动条高度
  const scrollHeight =
    document.documentElement.scrollTop || document.body.scrollTop
  for (let i = 0; i < len; i++) {
    const offsetHeight = imgs[i].offsetTop
    if (offsetHeight < viewHeight + scrollHeight) {
      const src = imgs[i].dataset.src
      imgs[i].src = src
    }
  }
}
window.addEventListener('scroll', lazyload)
```
