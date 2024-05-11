# Lucky-Tool 工具集

## 🐑 分支

main------------>二开开源项目 IT-Tools

IT-Tools地址:
https://github.com/CorentinTh/it-tools

## 🐶 开发环境

node 16+

包管理采用 pnpm

```shell
npm install -g pnpm
pnpm install
```

## 🐯 代码提交规范

按照如下规范:

| 类型     | 描述                     |
| -------- | ------------------------ |
| feat     | 新功能                   |
| fix      | 修补 bug                 |
| docs     | 文档                     |
| style    | 格式方面的优化           |
| refactor | 重构                     |
| test     | 测试                     |
| chore    | 构建过程或辅助工具的变动 |

比如修复一个 bug 必须是

fix: 修复 bug

中间有:后面有空格

## ⭐️ 开发工具

推荐 VS Code 开发，配合插件如下：

| 插件名                        | 功能                                             |
| ----------------------------- | ------------------------------------------------ |
| TypeScript Vue Plugin (Volar) | 用于 TypeScript 的 Vue 插件                      |
| Vue Language Features (Volar) | Vue3.0 语法支持                                  |
| WindiCSS IntelliSense         | 自动完成、语法突出显示、代码折叠和构建等高级功能 |
| Iconify IntelliSense          | Iconify 预览和搜索                               |
| i18n Ally                     | 国际化智能提示                                   |
| Stylelint                     | Css 格式化                                       |
| Prettier                      | 代码格式化                                       |
| ESLint                        | 脚本代码检查                                     |
| DotENV                        | env 文件高亮                                     |


## 🚀 部署

方法1：

先build打包，只需配置dockerfile文件即可，
配置如下

```dockerfile
FROM nginx:latest
LABEL Author luckynwa
COPY dist /usr/share/nginx/html

```

制作镜像
docker build -t luckyvue3 .
docker images
发布到hub库
docker login
前面镜像弄的比较快，名字luckyvue3
修改镜像名称
docker tag luckyvue3 luckynwa6/luckyvue3:1.0
发布
docker push luckynwa6/luckyvue3:1.0

方法2：
docker compose up --build -d

## 🐷 其他

删除node包

```shell
npm install -g rimraf
```

配置 scripts 中 "clean": "npx rimraf node_modules",

