# Vue

## 1. 生命周期

- beforeCreated
- Created
- beforeMounted
- Mounted
- beforeUpdated
- Updated
- beforeDestory
- Destoryed

## 2. 双向数据绑定原理

### vue2

### vue3

## 3. MVVM 响应式原理

## 4. 组件通信方式

### 父子组件的通信

### 非父子组件的 eventBus 通信

### 利用本地缓存实现组件通信

### vuex 通信

## 5. 介绍一下 vuex

- vuex 是状态管理模式，采用集中式存储管理应用所有组件的状态，并以相应的规则暴增状态以一种可预测的方式发生变化。
- 将全局组件的共享状态抽取出来为一个 store，应用中任何一个组件都可以使用，vuex 更改 state 的唯一途径就是通过 mutation
- mutation 需要 commit 触发，action 实际触发的也是 mutation
- mutation 处理同步任务，action 处理异步任务

### vuex 的每个属性

- state：是存储的单一状态，是存储的基本数据
- getters：从基本数据 state 派生的数据，相当于 store 的计算属性
- mutations：提交更新数据的方法，必须是同步的。每个 mutation 都有一个字符串的事件类型（type）和一个回调函数（handler）。
- actions：像是一个装饰器，提交的是 mutation，而不是直接变更状态，可以包含任何异步操作
- modules：是 store 分割的模块，每个模块拥有自己的 state、getters、mutations、actions
- 辅助函数：mapState、MapGetters、MapActions、MapMutations 等辅助函数给开发在 vm 中处理 store

## 6. vue 中 computed 和 watch 区别

> 参考链接[Vue 中 computed 和 watch 的区别](https://www.cnblogs.com/jiajialove/p/11327945.html)
> 计算属性 computed：

1. 支持缓存，只要依赖数据发生变化，才会重新进行计算
2. 不支持异步，当 computed 内有异步操作时无效，无法监听数据变化
3. computed 属性值默认会走缓存，计算属性市基于他们的响应式依赖进行缓存的，也就是基于 data 中声明过或父组件传递的 props 中的数据通过计算得到的值
4. 如果一个属性是由其他属性计算而来的，这个属性依赖其他值，是一个多对一或者一对一，一般用 computed
5. computed 属性值是函数，默认走 get 方法；函数返回值就是属性的属性值；在 computed 中，属性都有一个 get 和 set 方法，当数据发生变化时调用 set 方法

监听属性 watch：

1. 不支持缓存，数据变，直接触发相应的操作
2. 支持异步
3. 监听的函数接受两个参数，一是最新的值，二是输入之前的值
4. 当一个属性发生变化时，需要执行对应的操作，一对多；
5. 监听数据必须是 data 中声明过或者父组件传递过来的 props 中的数据，当数据变化时，函数有两个参数

- immediate：组件加载时立即触发回调函数执行
- deep：深度监听，为了发现对象内部值得变化，复杂类型数据时使用，例如数组中得对象内容发生改变，监听数组的变动不需要这么做。注意：deep 无法监听到数组得变动和对象的新增，只有以响应式得方法触发才会被监听到

## mutation 和 action 有什么区别？

- mutation 中更改 vuex 的 store 中状态的唯一方法是提交 mutation。每个 mutation 都有一个字符串的事件类型 type 和一个回调函数 handler。这个回调函数就是我们实际进行状态更改的地方，并且会接受 state 作为第一个参数
- mutation 中的 hander 不能直接调用，需要配合 store.commit 方法使用
- action 提交的是 mutation，而不是直接变更状态
- action 可以包含任意的异步操作。
