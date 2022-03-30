export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "介绍",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "它是怎么工作的",
      "slug": "它是怎么工作的",
      "children": []
    }
  ],
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
  "filePathRelative": "README.md"
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
