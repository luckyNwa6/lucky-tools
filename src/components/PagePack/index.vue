<template>
  <div class="flex flex-col h-full overflow-y-auto">
    <div class="page-box h-0 flex-1 flex flex-col">
      <template v-if="slots.promptContent">
        <slot name="promptContent"></slot>
      </template>
      <el-card class="search-card">
        <el-form>
          <div class="flex pb-3">
            <div class="flex-1 search-form">
              <slot name="searchForm"></slot>
            </div>
            <div class="space-x-2 ml-2 flex button-area">
              <div>
                <el-button v-if="showToggleButton" text @click="changeToggle">
                  <i-ep-arrow-down
                    :class="showSeniorSearch ? 'down-icon' : ''"
                    class="change-icon mr-1"
                  />
                  {{ showSeniorSearch }}
                </el-button>
              </div>
              <slot name="searchButton"></slot>
            </div>
          </div>
        </el-form>
      </el-card>
      <el-card class="table-card">
        <slot name="pageTable"></slot>
        <div class="pagination-box">
          <slot name="pagePagination"></slot>
        </div>
      </el-card>
      <slot></slot>
    </div>
    <!-- <PageNoPermission v-else /> -->
  </div>
</template>
<script setup>
// import usePermission from '@/hooks/usePermission';
// import MenuTypeEnum from '@/enums/authTypes'

// const { hasPermission } = usePermission();
const slots = useSlots()
const emit = defineEmits(['update:toggleValue'])

const showSeniorSearch = ref(false)

const props = defineProps({
  /**
   * 权限名称
   *
   */
  permissionName: {
    type: String,
    default: '', // 设置默认值
  },
  /**
   * 是否显示展开收起按钮
   */
  showToggleButton: {
    type: Boolean,
    default: false,
  },
  /**
   * 是否存在描述组件
   */
  // isPromptContent: {
  //   type: Boolean,
  //   default: false,
  // },
  /**
   * 用于按钮双向绑定的值
   */
  toggleValue: {
    type: Boolean,
    default: false,
  },
})

// const permissionValue = computed(() => {
//   const { [props.permissionName]: value } = MenuTypeEnum
//   return value
// })

const changeToggle = () => {
  showSeniorSearch.value = !showSeniorSearch.value
  emit('update:toggleValue', showSeniorSearch.value)
}
</script>
<style lang="scss" scoped>
.page-box {
  padding: 12px;
}
.search-card {
  // margin: 0 0 12px 0;
  margin-bottom: 12px;
  border-radius: 4px;

  :deep(.el-card__body) {
    padding: 12px 12px 0 12px;
  }

  :deep(.el-form-item) {
    margin-bottom: 12px !important;
  }
}

.table-card {
  height: 100%;
  flex: 1;
  border-radius: 4px;

  :deep(.el-card__body) {
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 12px;
    padding-bottom: 0;
  }

  :deep(.operate-area) {
    margin: 0 0 16px 0;
  }
}

.pagination-box {
  display: flex;
  justify-content: center;
  text-align: center;
}

.change-icon {
  transition: transform 0.3s;
  cursor: pointer;
}

.down-icon {
  transform: rotateZ(180deg);
}

.search-form {
  :deep(.el-date-editor) {
    width: 100%;
  }

  :deep(.el-select) {
    width: 100%;
  }
}
</style>
