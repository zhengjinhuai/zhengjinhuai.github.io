# Algorithm

## 将数组转换成树

将输入的数组组装成一颗树状的数据结构，时间复杂度越小越好

```javascript

```

## 数组扁平化

> (js5 种方式实现数组扁平化)[https://www.cnblogs.com/chenhuichao/p/13564682.html]

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

###
