# React

## Example

```JavaScript
class Board extends React.Component {
  renderSquare(i){
    return <Square value={i} / >;
  }
}

class Square extends React.Component{
  render(){
    return (
      <button className="square">
        {this.props.value}
      </button>
    )
  }
}
```

## React 生命周期

- [componentWillReceiveProps 详解（this.props）状态改变检测机制](https://www.cnblogs.com/gdsblog/p/7348375.html)

### 1. 挂载卸载过程

#### 1.1 constructor()

- React 数据初始化，参数：props 和 context，当想用这两个参数的时候就需要 super()传入这里两个参数
  - super()的作用，在子类的 constructor 里使用 this，必须调用父类 constructor，否则就拿不到 this
  - 如何调用父类的 constructor 呢，通过 super()
    如果要在 constructor 中使用父组件传递过来的参数，必须调用父组件的 super 时，传递参数给父组件的 constructor
  - 如果不在 constructor 里面使用 this，或者参数，就不需要 super ； 因为 React 以及帮你做了 this，props 的绑定

#### 1.2 componentWillMount()

在渲染前调用，在客户端也在服务端，它更多的是在服务端渲染时使用，它代表组件已经经历了 constructor()初始化数据后，但还未渲染 DOM 时

#### 1.3 componentDidMount()

组件第一次渲染完成，此时 dom 节点已经生成，可以在这里调用 AJAX 请求，返回数据 setState 后组件会重新渲染

#### 1.4 componentWillUnmount()

此处完成组件的卸载和数据的销毁

### 2. 更新过程

#### 2.1 componentWillReceieveProps(nextProps)

- 在接受父组件改变后的 props 需要重新渲染组件时用到的比较多
- 接受一个参数 nextProps
- 通过对比 nextProps 和 this.props，将 nextProps 的 state 修改为当前组件的 state，从而重新渲染组件

#### 2.2 shouldCompnentUpdate(nextProps, nextState)

#### 2.3 componentWillUpdate(nextProps, nextState)

#### 2.4 componentDidUpdate(preProps, prevState)

#### 2.5 render()

- render 函数会插入 jsx 生成的 dom 结构，react 会生成一份虚拟 dom 树，在每一次组件更新时，react 都会通过 diff 算法比较前后的新旧 DOM 树，比较之后找到最小差异的 dom 节点，并重新渲染。
- react 通过 this.state()方法来更新 state，当 this.setState()被调用的时候，React 就会重新调用 render 方法来重新渲染 UI

### React 新增的生命周期

## 渲染

1. 根：`<div id="root"></div>`
2. ReactDOM.render(element, document.getElementById('root'))

## react props

### react 中的 setState 的使用和深入理解

state 和 props 的区别

- state 时可变的，是组件内部维护的一组用于反映组件 UI 变化的状态集合
- props 对于使用它的组件来说是只读的，如果想要修改 Props，只能通过组件的父组件修改。在组件状态上移的场景中，父组件正式通过子组件的 Props 传递给子组件其所需要的状态
- 参考链接：https://www.cnblogs.com/katydids/p/10014111.html

setState()

- 当 this.setState()被调用的时候，React 会重新调用 render 方法来重新渲染 UI。

什么时候使用 state（或者说判断是否可以作为个 state 的条件）

1. 需要响应式挂载
2. 变量如果是通过 props 从父组件中获取，就不是一个状态
3. 需要在 render 中使用
4. 在整个生命周期中都保持不变，也不是一个状态

- 关于 setstate()应该了解三件事

1. 不要直接修改 state

- 用 setState()修改

2. 构造函数是唯一可以给 this.state 赋值的地方
3. state 的更新可能是一个异步操作，即修改 state 后发现 state 并没有被立即修改

- react 把多个 setState()调用合并成一个调用
- 因为 this.props 和 this.state 可能会异步更新，所以你不要依赖他们的值来更新下一个状态。

## Redux

1. redux 为 React 提供可预测化的状态管理机制
2. redux 将整个应用状态存储到 store，store 里保存着一个 state 状态树
3. 组件可以派发（dispatch）行为（action）给 store，而不是直接通知其他组件
4. 其他组件可以通过订阅 store 中的状态 state 来刷新自己的视图；

## 核心概念

### 组合和继承

1. 如何知晓子组件的具体内容

- 使用一个 children prop 来将他们的子组件传递到渲染结果

```javascript
function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  )
}
```

好处：**别的组件可以通过 JSX 嵌套，将任意组件作为子组件传递给它们**

2. props.children 的用法

对于 function 组件

```javascript
// 定义一个Welcome空间
function Welcome(props) {
  return <p>{props.children}</p>
}
```

对于 class 组件

```javascript
class Welcome extends React.Component {
  render() {
    return <p>{this.props.children}</p>
  }
}
```

```javascript
// 上面的 props.children 接受的是什么数据呢，就是
<Welcome>
  我传递“Hello world!”，props.children 那边就会显示 Hello world!
</Welcome>
```

#### 继承

- 无需要使用继承来构建组件层次的情况
- 用 props 和组合就够了

  - 组件可以接受任意 props，包括基本数据类型，react 元素以及函数

- 如果需要复用非 UI 功能，提取为 js 模块，如函数、对象、类，组件可以直接引入 import 无需通过 extend 继承他们

举个栗子：WelcomeDialog 是 Dialog 的特例

```javascript
function Dialog(props) {
  return (
    <FancyBorder>
      {props.title}
      {props.message}
      {props.children}
    </FancyBorder>
  )
}

function WelcomeDialog() {
  return (
    <Dialog title="Welcome" message="Thank you for visiting our spaceraft!" />
  )
}

class SignUpDialog extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
    this.state = { login: '' }
  }

  render() {
    return (
      <Dialog title="I am title." message="I am message.">
        <input value={this.state.login} onChange={this.handleChange} />
        <button onClick={this.handleSingUp}>冲冲冲</button>
      </Dialog>
    )
  }

  handleChange(e) {
    this.setState({ login: e.target.value })
  }

  handleSignUp() {
    alert(`Welcome, ${this.state.login}!`)
  }
}
```

### React 设计

#### 第一步：将 UI 划分为组件层

#### 第二步：用 React 创建一个静态版本

#### 第三步：确定 UI state 的最小且完整的表示

1. 通过问自己以下三个问题，你可以逐个检查相应数据是否属于 state：

- 该数据是否是由父组件通过 props 传递而来的？如果是，那它应该不是 state。
- 该数据是否随时间的推移而保持不变？如果是，那它应该也不是 state。
- 你能否根据其他 state 或 props 计算出该数据的值？如果是，那它也不是 state。

2. 确定哪个组件能够改变这些 state，或者说拥有这些 state，尝试通过以下步骤来判断：

对于应用中的每一个 state：

找到根据这个 state 进行渲染的所有组件。
找到他们的共同所有者（common owner）组件（在组件层级上高于所有需要该 state 的组件）。
该共同所有者组件或者比它层级更高的组件应该拥有该 state。
如果你找不到一个合适的位置来存放该 state，就可以直接创建一个新的组件来存放该 state，并将这一新组件置于高于共同所有者组件层级的位置。

#### 第四步：

## React JSX

1. 会自动对 html 进行编码

- 倘若不想要字符串经过编码，则使用 dangerouslySetInnerHtml 属性，是 react 版本的 innerHTML

```javascript
let v = {
  __html: '<script></script>',
}
;<h1 dangerouslySetInnerHTML={v} />
```

## React 传递参数的多种方式

> [React 传递参数的多种方式](https://www.cnblogs.com/luxiaot/p/10093986.html)

1. 父子组件之间传递参数

- 父往子组件传值，this.props 就可以实现
  - 父组件中需要给传递数据的子组件添加一个自定义属性，子组件中 this.props 就可以获取到父组件传递过去的数据

2. 子组件给父组件传值的话，需要在父组件设置接收函数和 state，同时将函数名通过 props 传递给子组件

3. 路由传参
   > 安装 npm install react-router-dom --save-dev

- 定义路由？？？？？？？？

4. 状态提升

- 将多个组件需要共享的状态提升到离他们最近的那个公共父组件，然后通过父组件通过 props 分发给子组件

5. context（get√）
6. 引入 redux

## React 页面跳转的几种方式

1. history 在原窗口跳转
2. 打开新的跳转窗口
3. 使用 a 标签，原窗口跳转

## React 核心概念

### Context

> [React Context(上下文) 作用和使用 看完不懂 你打我](https://www.jianshu.com/p/65b348bf86ad)
> 是什么？

- 共享数据，无需为每层组件手动添加 props 就可以在组件树间进行数据传递的方法

怎么做？

- 使用 provider，举个栗子：toolbar 有 theme 属性，要传递给 ThemeButton

使用应该注意什么？

- context 主要应用场景是“很多”不同层级的组件需要访问同样一些数据。使用频繁导致组件复用性变差
- 另一种解决方法：组件组合（component composition）

```javascript
// 创建 context
const { Provider, Consumer } = React.createContext('默认值')

// 使用Provider，即生产者
;<Provider value={共享的数据}></Provider>
```

```javascript
// 为theme创建一个context
const ThemeContext = React.createContext('hello')
class App extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    )
  }
}
```

```javascript
// contextType可以简化context的使用，不使用consumer也可以共享变量。
// 但是contextType只能在类组件中使用
// contextType只能有一个
```

## HOOK

> HOOK 是一个特殊的函数，可以在函数组件里“钩入”React state 及生命周期等特性的函数。

### 为什么要加入 HOOK

- Q1: 在组件之间复用状态逻辑很难？React 需要为共享状态逻辑提供更好的原生途径
- A1: 熟悉之后，有 render props 和高阶组件可以解决复用状态逻辑的问题，但是使用 Hook 从组件中提取状态逻辑，使得这些逻辑可以单独测试并复用。HOOK 使你在无需修改组件结构的情况下复用状态逻辑
- Q2: 复杂组件变得难以理解？
- A2: Hook 将组件中相互关联的部分拆分成更小的函数（比如设置订阅或请求数据），而并非强制按照生命周期划分。你还可以使用 reducer 来管理组件的内部状态，使其更加可预测。
- Q3: 难以理解的 class
- A3: HOOK 不可以在 class 中使用，可以不编写 class 的情况下使用 state 以及其他 react 特性
- Q4: 什么时候会用 HOOK？
- A4: 当我在编写函数组件并需要向其添加一些 state 的时候，以前是将其转换为 class

### State Hook

### Effect Hook

> 在函数组件中执行副作用操作，它跟 class 组件中的 componentDidMount、componentDidUpdate 和 componentWillUnmount 具有相同的用途，只不过被合并成了一个 API

- 副作用： React 组件中执行过数据获取、订阅或者手动修改过 DOM

1. 无需清除的 effect

- 我们只想在 React 更新 DOM 之后运行一些额外的代码。比如发送网络请求，手动变更 DOM，记录日志，这些都是常见的无需清除的操作。

2.

## react 路由

> [React Router 中文文档](http://react-guide.github.io/react-router-cn/index.html)

### react-router-dom

> [React 的路由——react-router-dom](https://www.jianshu.com/p/336770af0047)

- hash 路由：HashRouter
- history 路由：BrowserRouter / HistoryRouter
- 路由组件：Route

  - 用于显示路由
  - `path component render exact`
  - 其中 render 属性和 component 的区别
    - 用 component 渲染页面的时候，会默认给渲染的组件传递三个值：history、match、location。
    - render 需要手动给函数加参数（也可以通过 withRouter 来搞定）：
      - `import { withRouter } from 'react-router-dom`
      - export 的时候 `export default withRouter(myComponent)`
    - render 可以渲染组件，也可以渲染标签
    - render 渲染的时候，可以进行传值。因为是标签，可以直接属性传值，props 取值
    - 一般情况下，通过 render 的形式进行路由嵌套
    - render 更自由，可以进行更多的业务逻辑

- 路由懒加载

```javascript
const Home = loadable(
  loader:() => import("组件"),
  loading: Loaing{
    // 这个Loadind是自己的Loading组件
  }
);
```

## 高级指引

## Fragments

> 等价于短语法，看起来像空标签，但是不支持 key 或属性

携带 key，场景：将一个集合映射到一个 Fragments 数组

```javascript
function Glossary(props){
  return (
    <dl>
    {props.items.map(item => ())}
    </dl>
  )
}
```

### 错误边界

> 一种 react 组件，可以捕获发生在其子组件树任何位置的 JavaScript 错误（无法捕获其自身的错误），并打印这些错误，同时展示降级 UI

!!无法捕获：

1. 事件处理
2. 异步代码
3. 服务端渲染
4. 它自身抛出来的错误（并非它的子组件）

#### 怎么才是错误边界组件

1. 定义了`static getDerivedStateFromError()`或`componentDidCatch()`任意一个或两个时，该 class 组件就变成错误边界组件
2. 当抛出错误之后，`static getDerivedStateFromError()`渲染备用 UI，使用 componentDidCatch()打印错误信息。

```javascript
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    logErrorToMyService(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong</h1>
    }
    return this.props.children
  }
}
```
