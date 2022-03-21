import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-31071e3e","/config.html",{"title":"进阶配置"},["/config","/config.md"]],
  ["v-1bb9c728","/example.html",{"title":"示例"},["/example","/example.md"]],
  ["v-5a1d5755","/getStarted.html",{"title":"快速上手"},["/getStarted","/getStarted.md"]],
  ["v-0c25c1b1","/joinIn.html",{"title":"加入"},["/joinIn","/joinIn.md"]],
  ["v-8daa1a0e","/",{"title":"介绍"},["/index.html","/README.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
