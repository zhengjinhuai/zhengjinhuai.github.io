# TypeScript

## 学习计划

> 参考：https://zhuanlan.zhihu.com/p/240069181?utm_source=wechat_session

```
第一步：[学习链接](http://ts.xcatliu.com/introduction/index.html)；
第二步：TypeScript Handbook
第三步：记录学习笔记
- 设计目标、理念、原则

```

## 1. 概念

> [typescript 介绍](http://ts.xcatliu.com/introduction/what-is-typescript.html)

- 本质上也是一种语法
- 系统类型按照[是否允许隐式类型转换]来分为强类型和弱类型
- TypeScript 完全兼容 js，为弱类型
- 有一些第三方库原生不支持 TypeScript，但是可以通过安装社区维护的类型声明库[9]（比如通过运行`npm install --save-dev @types/react` 来安装 `React` 的类型声明库）来获得代码补全能力——不管是在 JavaScript 项目中还是在 TypeScript 中项目中都是支持的

## 2. 使用

- 需要配置`tsconfig.json`来指定这个项目的根文件和编译选项
-

## 对象的类型——接口

> 在 ts 中，使用接口 interface 来定义对象的类型

- 例子

```
interface Person {
  name: string;
  age?: numebr;
  [propName: string]: any;
}
```

- 使用规范
  - 可选属性：接口可以通过?来实现
  - 任意属性：[propName: string]: any;
    - 如果定义了任意类型，那么确定属性和可选属性的类型必须是他的类型的子集
  - 只读属性

### interface 和 type 的区别

interface

- 同名聚合，也可以和同名 class 自动聚合
- 只能表示 object、class、function

type:

- 不允许重名
- 不仅仅表示 object，class、function，支持复杂的类型操作

## 数组类型

- 数组的项不允许出现其他的类型

### 数组泛型

```
function createArray<T>(length: number, value: T): Array<T>{
  let result: T[] = [];
  for( let i = 0; i < length; i++){
    result[i] = value;
  }
  return result;
}

createArray<string>(3, 'x');  // ['x', 'x', 'x']
```

####

<font color="red">**范型接口**</font>

## 泛型

- [TypeScript 泛型之 Omit<T, K> = Pick<T, Exclude<keyof T, K>>](https://juejin.cn/post/6844903977461514254)

### Omit<T, K> = Pick<T, Exclude<keyof T, K>>

1. partial

> 将传入的属性变为可选项

2. Required

> 将传入的属性变为必选项

3. Pick：从 T 中取出一系列 K 的属性

    - type Pick<T, K extends keyof T> = { [P in K]: T[P] };

4. Exclude（排除），如果 T 是 U 的子类型那么返回 never 类型，否则返回 T

- type Exclude<T, U> = T extends U ? never : T;
- 补充：never 类型用来避免出一些错，因为在编译过程中会出现编译错误。

5. Omit（省略）：

```typescript
// Pick，从T中取出一系列K属性
type Pick<T, K extends keyof T> = { [P in K]: T[P] };

// Exclude，
type Exclude<T, U> = T extends U ? never : T;

// Omit
type Omit = Pick<T, Exclude<keyof T, K>>;
```
