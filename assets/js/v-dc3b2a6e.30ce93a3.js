"use strict";(self.webpackChunkzhengjinhuai=self.webpackChunkzhengjinhuai||[]).push([[781],{219:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t=JSON.parse('{"key":"v-dc3b2a6e","path":"/react/","title":"React","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"说说React diff的原理是什么？","slug":"说说react-diff的原理是什么","link":"#说说react-diff的原理是什么","children":[]},{"level":2,"title":"Redux","slug":"redux","link":"#redux","children":[]},{"level":2,"title":"说说对 Fiber 架构的理解？解决了什么问题？","slug":"说说对-fiber-架构的理解-解决了什么问题","link":"#说说对-fiber-架构的理解-解决了什么问题","children":[]},{"level":2,"title":"useTransition 是什么？","slug":"usetransition-是什么","link":"#usetransition-是什么","children":[]}],"git":{"updatedTime":1719163286000,"contributors":[{"name":"zhengjinhuai","email":"873217817@qq.com","commits":4}]},"filePathRelative":"react/index.md"}')},6613:(n,s,a)=>{a.r(s),a.d(s,{default:()=>o});var t=a(6252);const p=[(0,t.uE)('<h1 id="react" tabindex="-1"><a class="header-anchor" href="#react" aria-hidden="true">#</a> React</h1><h2 id="说说react-diff的原理是什么" tabindex="-1"><a class="header-anchor" href="#说说react-diff的原理是什么" aria-hidden="true">#</a> 说说React diff的原理是什么？</h2><h2 id="redux" tabindex="-1"><a class="header-anchor" href="#redux" aria-hidden="true">#</a> Redux</h2><h2 id="说说对-fiber-架构的理解-解决了什么问题" tabindex="-1"><a class="header-anchor" href="#说说对-fiber-架构的理解-解决了什么问题" aria-hidden="true">#</a> 说说对 Fiber 架构的理解？解决了什么问题？</h2><h2 id="usetransition-是什么" tabindex="-1"><a class="header-anchor" href="#usetransition-是什么" aria-hidden="true">#</a> useTransition 是什么？</h2><ul><li>是 React 18 中引入的一个 Hook，用于处理 UI 中的并发状态（concurrent state）。</li><li>它主要用于处理一些低优先级的状态更新，以便用户界面在执行复杂的更新时仍然保持响应。</li><li>useTransition 可以帮助避免因为繁重的计算或数据加载而导致的界面卡顿，从而提升用户体验。</li></ul><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>const [isPending, startTransition] = useTransition();\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>示例代码</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useTransition <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>inputValue<span class="token punctuation">,</span> setInputValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>searchResults<span class="token punctuation">,</span> setSearchResults<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>isPending<span class="token punctuation">,</span> startTransition<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useTransition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">const</span> <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> value <span class="token operator">=</span> event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">;</span>\n    <span class="token function">setInputValue</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// 将搜索结果的更新标记为低优先级的过渡更新</span>\n    <span class="token function">startTransition</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      <span class="token comment">// 模拟一个繁重的计算</span>\n      <span class="token keyword">const</span> results <span class="token operator">=</span> <span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Result </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> for &quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token function">setSearchResults</span><span class="token punctuation">(</span>results<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>\n      <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;text&quot;</span> value<span class="token operator">=</span><span class="token punctuation">{</span>inputValue<span class="token punctuation">}</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>\n      <span class="token punctuation">{</span>isPending <span class="token operator">&amp;&amp;</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>Loading<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">}</span>\n      <span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span>\n        <span class="token punctuation">{</span>searchResults<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">result<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>\n          <span class="token operator">&lt;</span>li key<span class="token operator">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>result<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>\n        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解释</p><ol><li>useTransition 和 startTransition： <ul><li>通过调用 useTransition，我们获得 isPending 和 startTransition。</li><li>isPending 是一个布尔值，当过渡状态更新正在进行时，它的值为 true。</li><li>startTransition 是一个函数，用于将某些状态更新标记为低优先级的过渡更新。</li></ul></li><li>handleChange 函数： <ul><li>当输入框的值发生变化时，调用 handleChange 函数。</li><li>更新输入框的值 inputValue。</li><li>使用 startTransition 将搜索结果的更新标记为低优先级的过渡更新。这意味着即使搜索结果的更新需要较长时间，用户界面的输入框仍然保持响应。</li></ul></li><li>显示加载状态： <ul><li>当 isPending 为 true 时，显示一个“Loading...”的提示，以告知用户搜索结果正在更新。</li><li>通过 useTransition，React 可以将高优先级的更新（如用户输入）和低优先级的更新（如搜索结果的计算和显示）区分开来，从而提高应用的响应速度和用户体验。</li></ul></li></ol>',11)],e={},o=(0,a(3744).Z)(e,[["render",function(n,s){return(0,t.wg)(),(0,t.iD)("div",null,p)}]])}}]);