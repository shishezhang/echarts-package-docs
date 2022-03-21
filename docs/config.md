# 进阶配置

在这里你可以学习到该封装库的最佳实践方式，从上一节快速入门可以知道该库配置起来非常方便，下面我们进一步深入使用该库

## $eChartFn.handleData

```js
({
  template: Object|String,
  data:Array<Object>,
  dataSourceConfig: { //非必填
    dimensions:Array
    seriesConfig:Array //非必填
  },
  echartsOption: Object //非必填
}) => ECharts
```

**参数说明**

- `template`

  模板容器，可以传入自定义模板或者选择内置模板，内置模板包括 bar、line 等

- `data`

  数据源要求是个数组，数组中包含的对象中存在 `name` 和 `value` 属性时会默认接收

- `dataSourceConfig`

  配置源，主要是用来配置数据源相关信息和配置渲染的系列信息

  - `dimensions`

    维度配置配合 `data` 进行使用，主要是配置多个系列，该配置可以参照 Echarts 的 [dimensions](https://echarts.apache.org/zh/option.html#dataset.dimensions)，简单来说，数组的第一个参数作为系列名称，第二个开始则为配置的数据源

    ```livescript
    let dataSourceConfig = {
      dimensions: ["name", "value1", "value2", "value"],
      <!-- or -->
      dimensions: ["name", { name: "value1", displayName: "测试1" }, { name: "value2", displayName: "测试2" }],
     }
    ```

  - `seriesConfig`

    系列配置，主要是配置系列参数，比如内置模板中的参数不符合图表样式，但是又不需要大改，那这里将需要修改的参数传入即可，

    ```js
    // 修改图表颜色
    seriesConfig: [{ color: "red" }],
    ```

- `echartsOption`

  `echarts`扩展配置，以`echarts`配置为主，不过要注意的是这里不能配置 `series`属性相关的配置，其他配置属性只需要按照 `echarts` 官网文档来进行配置即可。
