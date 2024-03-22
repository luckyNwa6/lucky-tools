<template>
  <div class="mt-4 ml-3">
    <exitButton />
    <hr />
    <el-button type="primary" size="small" icon="plus">新增</el-button>
    <el-button size="large" color="#626aef">
      <i-ep-edit />
      编辑
    </el-button>
    <el-tooltip class="item" effect="dark" content=" 隐藏查询" placement="top">
      <el-button size="small" circle icon="Refresh" />
    </el-tooltip>
    <hr />
    <h1>测试svg,用xlink:herf执行哪一个图标#icon-图标名称，或者直接组件使用</h1>
    <svg style="width: 30px; height: 30px">
      <use xlink:href="#icon-phone" fill="pink"></use>
    </svg>
    <SvgIcon name="phone" color="blue"></SvgIcon>
    <hr />
    按需自动引入
    <i-ep-add-location />
  </div>
</template>

<script setup>
// import { Plus, Edit } from '@element-plus/icons-vue' //这种的需要手动导，TODO
// import SvgIcon from '@/components/SvgIcon/index.vue'
</script>

<style lang="scss" scoped></style>
