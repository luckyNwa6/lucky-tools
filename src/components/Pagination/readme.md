# Pagination 组件

## 作者

- 公共研发组前端 杨权柱

## 概述

`Pagination` vue3 组件是对 `el-pagination` 组件的二次封装。

## 实例

简单且常用的方式

```vue
<template>
  <Pagination
    v-if="totalPages > 0"
    v-model:total="totalPages"
    v-model:page="tableQueryData.pageNum"
    v-model:limit="tableQueryData.pageSize"
    @pagination="getTablePage"
  />
</template>
```

## 属性

| 属性名       | 类型    | 默认值                                      | 描述               |
| ------------ | ------- | ------------------------------------------- | ------------------ |
| `total`      | Number  | **必需**                                    | 总记录数           |
| `page`       | Number  | `1`                                         | 当前页码           |
| `limit`      | Number  | `20`                                        | 每页显示条数       |
| `pageSizes`  | Array   | `[10, 20, 30, 50]`                          | 每页显示条数选项   |
| `layout`     | String  | `'total, sizes, prev, pager, next, jumper'` | 分页布局           |
| `background` | Boolean | `true`                                      | 分页背景颜色       |
| `autoScroll` | Boolean | `true`                                      | 是否自动滚动到顶部 |
| `hidden`     | Boolean | `false`                                     | 是否隐藏分页组件   |

## 事件

| 事件名         | 参数                              | 描述                   |
| -------------- | --------------------------------- | ---------------------- |
| `pagination`   | `{ page: Number, limit: Number }` | 分页变化时触发         |
| `update:page`  | Number                            | 当前页码变化时触发     |
| `update:limit` | Number                            | 每页显示条数变化时触发 |
