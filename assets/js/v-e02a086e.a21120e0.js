"use strict";(self.webpackChunkzhengjinhuai=self.webpackChunkzhengjinhuai||[]).push([[731],{2487:(e,a,i)=>{i.r(a),i.d(a,{data:()=>l});const l=JSON.parse('{"key":"v-e02a086e","path":"/javascript/","title":"JavaScript","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"闭包","slug":"闭包","link":"#闭包","children":[{"level":3,"title":"概念","slug":"概念","link":"#概念","children":[]},{"level":3,"title":"应用场景","slug":"应用场景","link":"#应用场景","children":[]}]},{"level":2,"title":"CommonJS 与 ES6 Module 的差异","slug":"commonjs-与-es6-module-的差异","link":"#commonjs-与-es6-module-的差异","children":[]}],"git":{"updatedTime":1719164108000,"contributors":[{"name":"zhengjinhuai","email":"873217817@qq.com","commits":2}]},"filePathRelative":"javascript/index.md"}')},2922:(e,a,i)=>{i.r(a),i.d(a,{default:()=>t});var l=i(6252);const r=[(0,l.uE)('<h1 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript</h1><h2 id="闭包" tabindex="-1"><a class="header-anchor" href="#闭包" aria-hidden="true">#</a> 闭包</h2><blockquote><p>闭包是指<strong>引用了另一个函数作用域中变量的函数</strong>，通常是嵌套在函数中实现的</p></blockquote><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3><p>在 JavaScript 中，根据词法作用域的规则</p><ul><li>内部函数总是可以访问其外部函数中声明的变量</li><li>当通过调用一个外部函数返回一个内部函数后，即使该外部函数已经执行结束了，但是内部函数引用外部函数的变量依然保存在内存中，我们就把这些变量的集合称为闭包。</li></ul><h3 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景</h3><ol><li>封装变量：在函数外部无法访问内部变量，但是通过闭包可以访问到。可以使用闭包来实现变量的私有化,避免被外部访问和修改</li><li>延迟执行：通过闭包可以实现定时器的延迟执行,避免在全全局作用域中声明变量或函数,污染全局命名空间</li><li>回调函数：可以使用闭包来保存回调函数中的状态信息,避免每次调用回调函数都需要重新传递参数。</li><li>模块化开发：可以使用闭包来实现模块化开发,将函数和变量封装在闭包中,避免与全局命名空间中的变量和函数发生冲突。</li></ol><h2 id="commonjs-与-es6-module-的差异" tabindex="-1"><a class="header-anchor" href="#commonjs-与-es6-module-的差异" aria-hidden="true">#</a> CommonJS 与 ES6 Module 的差异</h2>',9)],n={},t=(0,i(3744).Z)(n,[["render",function(e,a){return(0,l.wg)(),(0,l.iD)("div",null,r)}]])}}]);