export const data = {
  "key": "v-1bb9c728",
  "path": "/example.html",
  "title": "示例",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1647855196000,
    "contributors": [
      {
        "name": "李祥建",
        "email": "lixiangjian@example.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "example.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
