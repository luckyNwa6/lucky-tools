<template>
  <div class="pagination-content">
    <el-pagination
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :background="background"
      :layout="layout"
      :page-sizes="pageSizes"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  total: {
    required: true,
    type: Number,
    default: 0,
  },
  page: {
    type: Number,
    default: 1,
  },
  limit: {
    type: Number,
    default: 20,
  },
  pageSizes: {
    type: Array,
    default() {
      return [10, 20, 30, 50]
    },
  },
  layout: {
    type: String,
    default: 'total, sizes, prev, pager, next, jumper',
  },
  background: {
    type: Boolean,
    default: true,
  },
  autoScroll: {
    type: Boolean,
    default: true,
  },
  hidden: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['pagination', 'update:page', 'update:limit'])

const currentPage = useVModel(props, 'page', emit)

const pageSize = useVModel(props, 'limit', emit)

function handleSizeChange(val) {
  emit('pagination', { page: currentPage, limit: val })
  if (props.autoScroll) {
  }
}

function handleCurrentChange(val) {
  currentPage.value = val
  emit('pagination', { page: val, limit: props.limit })
  if (props.autoScroll) {
  }
}
</script>

<style lang="scss" scoped>
.pagination-content {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;

  &.hidden {
    display: none;
  }
}
</style>
