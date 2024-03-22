# PagePack 组件

## 作者

- 公共研发组前端 杨权柱

## 概述

`PagePack` 组件是一个自定义页面组件，用于展示搜索表单、数据表格以及分页等内容。

## 使用示例

```vue
<template>
  <div>
    <!-- 使用 CustomPage 组件 -->
    <PagePack
      :permissionName="permissionName"
      :showToggleButton="showToggleButton"
      :toggleValue="toggleValue"
    >
      <!-- 描述内容插槽 -->
      <template v-if="slots.promptContent">
        <template v-slot:promptContent>
          <!-- 描述内容 -->
        </template>
      </template>

      <!-- 搜索表单插槽 -->
      <template v-slot:searchForm>
        <!-- 搜索表单内容 -->
      </template>

      <!-- 搜索按钮插槽 -->
      <template v-slot:searchButton>
        <!-- 搜索按钮内容 -->
      </template>

      <!-- 数据表格插槽 -->
      <template v-slot:pageTable>
        <!-- 数据表格内容 -->
      </template>

      <!-- 分页插槽 -->
      <template v-slot:pagePagination>
        <!-- 分页内容 -->
      </template>

      <!-- 自定义内容插槽 -->
      <template v-slot>
        <!-- 自定义内容 -->
      </template>
    </PagePack>
  </div>
</template>

<script setup>
// 引入 CustomPage 组件
import CustomPage from '@/components/CustomPage.vue'

// 组件的状态和属性
const permissionName = ref('') // 设置默认值
const showToggleButton = ref(false)
const toggleValue = ref(false)
</script>
```

## 属性

| 属性名             | 类型    | 默认值  | 描述                 |
| ------------------ | ------- | ------- | -------------------- |
| `permissionName`   | String  | `''`    | 权限名称             |
| `showToggleButton` | Boolean | `false` | 是否显示展开收起按钮 |
| `toggleValue`      | Boolean | `false` | 用于按钮双向绑定的值 |

## 插槽

| 插槽名           | 描述                     |
| ---------------- | ------------------------ |
| `promptContent`  | 用于描述内容的插槽       |
| `searchForm`     | 用于搜索表单的插槽       |
| `searchButton`   | 用于搜索按钮的插槽       |
| `pageTable`      | 用于数据表格的插槽       |
| `pagePagination` | 用于分页的插槽           |
| 默认插槽         | 用于放置自定义内容的插槽 |
