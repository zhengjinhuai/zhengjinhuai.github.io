# CSS

## 1. CSS 的优先级

### 1.1 一般的优先级

- 内联样式 > 内部样式 > 外部样式
- 内联 > id 选择器 > 类选择器 > 标签选择器

### 1.2 优先级计算

计算规则

- 内联样式，A=1
- id 选择器，B+=1
- 类选择器、属性选择器、伪类，C+=1
- 标签选择器、伪元素，D+=1

比较规则：

- 依次比较 ABCD，大者胜出。相等取下一位进行比较
- 全等，就近原则，后面的覆盖前面
- `!important`会覆盖任何其他声明，包括内联样式

## 2. 水平居中

行内元素：

## 3. 垂直居中

3.5 flex

```css
#parent {
  display: flex;
  justify-content: center;
  align-item: center;
}
```

## 4. 圣杯布局

## 5. 双飞翼布局

## 伪类有哪些？

- link
- visited
- hover
- active
- :first-child
- :last-child
- nth-child

## CSS3 新特性

1. 过渡 transition
2. 动画 annimation
3. 转换 transform
4. 选择器

## flex

1. 父容器

- flex-direction：
- justify-content:
- align-items：
- flex-wrap：
- align-content：

2. 子容器

- flex：flex-grow flex-shrink flex-basis
- align-self

## BFC

> 块级格式化上下文，里面的元素样式不会在布局上影响外面元素

如何触发 BFC:

- body 根元素
- 浮动元素：除 none 以外的值
- position 为 absolute 或 fixed
- display 为 inline-block、flex 或 table-cells
- overflow 除 visible 以外的值

## 清除浮动

```css
.clearfix:after {
  content: '';
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}

.clearfix {
  *zoom: 1;
}
```

## 重绘和回流

### 重绘（repainted）

> 页面中元素样式发生变化但不影响它在文档流中的位置时，浏览器会将新的样式赋给元素并重新绘制

### 回流（reflowed）

> 当 render tree 中部分全部元素的布局或者几何属性发生变化时，浏览器重新渲染部分或者全部文档流，称为回流

- 回流什么时候触发：
  - 页面首次渲染
  - 浏览器窗口大小发生变化
  - 元素尺寸或者位置发生变化
  - 添加或者删除可见 DOM 元素
  - 激活 css 伪类

## css 的@import 和 link 标签的区别
