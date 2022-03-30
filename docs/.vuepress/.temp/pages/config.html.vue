<template><h1 id="进阶配置" tabindex="-1"><a class="header-anchor" href="#进阶配置" aria-hidden="true">#</a> 进阶配置</h1>
<p>在这里你可以学习到该封装库的最佳实践方式，从上一节快速入门可以知道该库配置起来非常方便，下面我们进一步深入使用该库</p>
<h2 id="echartfn-handledata" tabindex="-1"><a class="header-anchor" href="#echartfn-handledata" aria-hidden="true">#</a> $eChartFn.handleData</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> Object<span class="token operator">|</span>String<span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span>Array<span class="token operator">&lt;</span>Object<span class="token operator">></span><span class="token punctuation">,</span>
  <span class="token literal-property property">dataSourceConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">//非必填</span>
    <span class="token literal-property property">dimensions</span><span class="token operator">:</span>Array
    <span class="token literal-property property">seriesConfig</span><span class="token operator">:</span>Array <span class="token comment">//非必填</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">echartsOption</span><span class="token operator">:</span> Object <span class="token comment">//非必填</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> ECharts
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><strong>参数说明</strong></p>
<ul>
<li>
<p><code>template</code></p>
<p>模板容器，可以传入自定义模板或者选择内置模板，内置模板包括 bar、line 等</p>
</li>
<li>
<p><code>data</code></p>
<p>数据源要求是个数组，数组中包含的对象中存在 <code>name</code> 和 <code>value</code> 属性时会默认接收</p>
</li>
<li>
<p><code>dataSourceConfig</code></p>
<p>配置源，主要是用来配置数据源相关信息和配置渲染的系列信息</p>
<ul>
<li>
<p><code>dimensions</code></p>
<p>维度配置配合 <code>data</code> 进行使用，主要是配置多个系列，该配置可以参照 Echarts 的 <a href="https://echarts.apache.org/zh/option.html#dataset.dimensions" target="_blank" rel="noopener noreferrer">dimensions<ExternalLinkIcon/></a>，简单来说，数组的第一个参数作为系列名称，第二个开始则为配置的数据源</p>
<div class="language-livescript ext-livescript line-numbers-mode"><pre v-pre class="language-livescript"><code><span class="token keyword">let</span> <span class="token identifier">dataSourceConfig</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token identifier">dimensions</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token interpolated-string"><span class="token string">"name"</span></span><span class="token punctuation">,</span> <span class="token interpolated-string"><span class="token string">"value1"</span></span><span class="token punctuation">,</span> <span class="token interpolated-string"><span class="token string">"value2"</span></span><span class="token punctuation">,</span> <span class="token interpolated-string"><span class="token string">"value"</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> <span class="token keyword-operator operator">or</span> <span class="token operator">--></span>
  <span class="token identifier">dimensions</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token interpolated-string"><span class="token string">"name"</span></span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token identifier">name</span><span class="token punctuation">:</span> <span class="token interpolated-string"><span class="token string">"value1"</span></span><span class="token punctuation">,</span> <span class="token identifier">displayName</span><span class="token punctuation">:</span> <span class="token interpolated-string"><span class="token string">"测试1"</span></span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token identifier">name</span><span class="token punctuation">:</span> <span class="token interpolated-string"><span class="token string">"value2"</span></span><span class="token punctuation">,</span> <span class="token identifier">displayName</span><span class="token punctuation">:</span> <span class="token interpolated-string"><span class="token string">"测试2"</span></span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li>
<li>
<p><code>seriesConfig</code></p>
<p>系列配置，主要是配置系列参数，比如内置模板中的参数不符合图表样式，但是又不需要大改，那这里将需要修改的参数传入即可，</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 修改图表颜色</span>
<span class="token literal-property property">seriesConfig</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"red"</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li>
</ul>
</li>
<li>
<p><code>echartsOption</code></p>
<p><code>echarts</code>扩展配置，以<code>echarts</code>配置为主，不过要注意的是这里不能配置 <code>series</code>属性相关的配置，其他配置属性只需要按照 <code>echarts</code> 官网文档来进行配置即可。</p>
</li>
</ul>
</template>
