# Vue3项目模板

## 🐶测试环境

node 16+

技术栈采用:

Vue3+TypeScript+Pinia+Vite+vue-router+Element Plus

包管理采用pnpm

```shell
npm install -g pnpm
pnpm install
```

## 🐯代码提交规范

husky 是一个 Git Hook 工具，可以让你在 Git 提交过程中自动运行脚本。

当commit的时候会执行脚本，脚本会校验commit message是否符合规范。

严格安装如下规范:

| 类型     | 描述                     |
| -------- | ------------------------ |
| feat     | 新功能                   |
| fix      | 修补 bug                 |
| docs     | 文档                     |
| style    | 格式方面的优化           |
| refactor | 重构                     |
| test     | 测试                     |
| chore    | 构建过程或辅助工具的变动 |

比如修复一个bug 必须是

fix: 修复bug

中间有:后面有空格

## ⭐️开发工具

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

## 🚀优势

1、自动按需引入组件，自动按需引入Vue相关API，自动引入ep图标

2、在vscode提交时候走husky流程，先走格式化代码和修复，以及提交必须走提交规范,代码有错误则不能提交

## 🐷其他

暂无
