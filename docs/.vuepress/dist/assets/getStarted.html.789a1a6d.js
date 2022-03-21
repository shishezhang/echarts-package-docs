import{d as n}from"./app.aa7792d0.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";var a="/assets/getStarted-img1.f18f2d42.png";const p={},t=n(`<h1 id="\u5FEB\u901F\u4E0A\u624B" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u4E0A\u624B" aria-hidden="true">#</a> \u5FEB\u901F\u4E0A\u624B</h1><h2 id="\u4F9D\u8D56\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u4F9D\u8D56\u73AF\u5883" aria-hidden="true">#</a> \u4F9D\u8D56\u73AF\u5883</h2><p>\u56E0\u4E3A\u8BE5\u5E93\u662F\u57FA\u4E8E echarts \u6765\u5C01\u88C5\u7684\uFF0C\u6240\u4EE5\u5FC5\u987B\u8981\u4F9D\u8D56 echarts</p><blockquote><p>echarts</p></blockquote><h2 id="\u5B89\u88C5\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u4F7F\u7528" aria-hidden="true">#</a> \u5B89\u88C5\u4F7F\u7528</h2><p>\u6B65\u9AA4\u4E00\uFF1A \u4E0B\u8F7D npm \u5305</p><div class="language-npm ext-npm line-numbers-mode"><pre class="language-npm"><code>npm install echarts
npm install echarts-package
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u6B65\u9AA4\u4E8C\uFF1A \u5F15\u5165\u5B89\u88C5\u63D2\u4EF6</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> echartsView <span class="token keyword">from</span> <span class="token string">&quot;echarts-package&quot;</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>echartsView<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u6B65\u9AA4\u4E09\uFF1A \u5728\u9875\u9762\u4E0A\u4F7F\u7528\u7EC4\u4EF6\uFF0C\u5728 echarts-package \u4E2D\u9ED8\u8BA4\u63A5\u6536\u4EE5 <code>name</code> \u548C <code>value</code> \u547D\u540D\u7684\u5C5E\u6027\uFF0C\u4EE5\u6B64\u6765\u6E32\u67D3\u9875\u9762\uFF0C\u540E\u7AEF\u8FD4\u56DE\u7684\u6570\u636E\u6E90\u4EE5\u53C2\u6570\u7684\u5F62\u5F0F\u4F20\u5165 <code>this.$eChartFn.handleData</code> \u65B9\u6CD5\u4E2D\u5904\u7406\uFF0C\u5C06\u5E76\u9009\u62E9\u5BF9\u5E94\u7684 <code>template</code> \u4F5C\u4E3A\u6E32\u67D3\u6A21\u677F\uFF0C\u6700\u540E\u5C06\u65B9\u6CD5\u8FD4\u56DE\u7684\u914D\u7F6E\u4F20\u5165 <code>echartsView</code> \u7EC4\u4EF6\u4E2D\uFF0C\u5373\u53EF\u6E32\u67D3\u6570\u636E\u3002</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- \u4E3A ECharts \u4F20\u5165\u6570\u636E\u6E90\u548C\u5B9A\u4E49 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>echartsView</span> <span class="token attr-name">:chart-option</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chartOpt<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>echartsView</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;App&quot;</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">chartOpt</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u51C6\u5907\u597D\u6A21\u62DF\u540E\u7AEF\u8FD4\u56DE\u7684\u6570\u636E\u5217\u8868</span>
    <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u5C0F\u5170&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">76</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u5C0F\u7EFF&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">43</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u5C0F\u7EA2&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">27</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// \u4F7F\u7528\u5185\u7F6E\u7684 handleData \u65B9\u6CD5\u5904\u7406\u6570\u636E</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>chartOpt <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$eChartFn<span class="token punctuation">.</span><span class="token function">handleData</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&quot;base&quot;</span><span class="token punctuation">,</span> data <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><p>\u662F\u7684\u5C31\u662F\u8FD9\u4E48\u7B80\u5355\uFF0C\u53EA\u9700\u8981\u4F20\u5165\u6570\u636E\u6E90\u548C\u914D\u7F6E\u6A21\u677F\u5373\u53EF\uFF0C\u6548\u679C\u5982\u4E0B\u6240\u793A</p><p><img src="`+a+'" alt="\u6548\u679C\u56FE"></p>',13);function e(c,o){return t}var u=s(p,[["render",e]]);export{u as default};
