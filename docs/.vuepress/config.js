module.exports = {
  title: "echarts-package文档", // 设置网站标题
  description: "",
  base: "./",
  themeConfig: {
    nav: [
      { text: "快速上手", link: "/getStarted" },
      { text: "配置", link: "/config" },
      { text: "示例", link: "/example" },
      { text: "加入", link: "/joinIn" },
    ],
    sidebar: {
      "/": [
        "/", //指的是根目录的md文件 也就是 README.md 里面的内容
        "getStarted",
        "config",
        "example",
        "joinIn",
      ],
    },
    sidebarDepth: 2,
  },
};
