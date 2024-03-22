<template>
  <div class="page-wrap">
    <el-row :gutter="12">
      <el-col
        v-for="item in componentsListSort"
        :key="item.component"
        :span="item.span"
      >
        <component :is="item.component" :com-title="item.title" />
      </el-col>
    </el-row>
    <exitButton />
  </div>
</template>

<script setup>
import productType from './components/productType.vue' // 产品类型统计
import { cloneDeep } from 'lodash'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const componentsList = ref([
  {
    title: t('Product type statistics'),
    component: productType,
    span: 8,
    index: 3,
  },
])

const componentsListSort = computed(() => {
  const components = cloneDeep(componentsList.value)
  return components.sort((a, b) => a.index - b.index)
})
</script>

<style lang="scss" scoped>
// @import '@/styles/custom-color.scss';

.page-wrap {
  height: 100%;
  overflow-y: auto;
  padding: 12px;
  padding-top: 0;

  :deep() {
    .el-card__header {
      padding: 10px 20px;
      border-bottom: none;
    }
    .card-header-left {
      .header-icon-box {
        border-radius: 3px;
        margin-right: 6px;
      }

      .header-title {
        font-size: 16px;
        font-weight: bold;
        color: #333333;
      }
    }
    .el-row {
      .el-col:nth-child(1) {
        .el-col:nth-child(-n + 4) {
          margin-top: 0;
        }
      }
    }
    .el-col {
      margin-top: 12px;
    }
    .chart-content {
      height: 260px;
    }
  }
}
</style>
