# Lucky-Tool 工具集

## 🐑 分支

main------------>二开开源项目 IT-Tools

luckyDev-------->lucky的分支

zhouDev--------->辉哥的分支

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

方法1:

由于是静态直接放主服务器下,通过域名去访问了

https://mytool.luckynwa.top/lucky-tools/

备用地址:https://luckynwa6.github.io/lucky-tools/

方法2：

采用CICD自动化部署项目到云服务器

方法3：

先build打包，只需配置dockerfile文件即可，
配置如下

```dockerfile
FROM nginx:latest
LABEL Author luckynwa
COPY dist /usr/share/nginx/html

```

制作镜像

```shell
docker build -t luckynwa6/luckytools:2.0 .
docker images
```

发布到hub库

```shell
docker login
docker push luckynwa6/luckytools:2.0
```

云服务使用 打开9090端口

```shell
docker run -d --name lucky-tools --restart unless-stopped -p 9090:80 luckynwa6/luckytools:2.0
```

方法3：
docker compose up --build -d

## 🐷 其他

删除node包

```shell
npm install -g rimraf
```

配置 scripts 中 "clean": "npx rimraf node_modules",

'NODE_OPTIONS' 不是内部或外部命令

```shell
npm install -g win-node-env
```
