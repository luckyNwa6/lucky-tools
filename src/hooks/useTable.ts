import _ from 'lodash'

/**
 * 自定义 Hook 用于处理表格的查询和操作。
 * @param {Function} initQueryData - 用于初始化查询数据的函数。
 * @returns {Object} 包含用于操作表格的函数和响应式数据的对象。
 * @author ShowPenZ
 */
export default function useTable(initQueryData: any, tableRef: any) {
  // 使用 Vue 3 的响应式数据
  const tableQueryData = reactive(initQueryData())
  const searchData = reactive(initQueryData())
  const tableLoading = ref(false)
  const tablePage = ref([])
  const totalPages = ref(0)

  /**
   * 用于触发获取表格数据的函数。
   * @param {Function} fn - 获取表格数据的函数。
   * @returns {any} 根据传入的函数返回值，或者抛出错误。
   */
  function hooks_getTableData(fn: any) {
    if (fn) {
      return _.isFunction(fn) && fn()
    } else {
      throw new Error('需要传递一个函数！例如：getTableData(fn)')
    }
  }

  /**
   * 用于重置查询表格的数据。
   * @param {Function} fn - 用于获取表格数据的函数。
   * @returns {any} 根据传入的函数返回值，或者抛出错误。
   */
  function hooks_resetQueryTable(fn: any) {
    const initQueryDataKeys = Object.keys(initQueryData())

    for (const key in tableQueryData) {
      if (initQueryDataKeys.includes(key)) {
        tableQueryData[key] = initQueryData()[key]
        searchData[key] = initQueryData()[key]
      } else {
        delete tableQueryData[key]
        delete searchData[key]
      }
    }

    if (tableRef && tableRef.value) {
      nextTick(() => {
        tableRef.value.clearSort()
      })
    }

    if (fn) {
      return _.isFunction(fn) && hooks_getTableData(fn)
    } else {
      throw new Error('需要传递一个函数！例如：resetQueryTable(fn)')
    }
  }

  /**
   * 用于根据属性对表格进行排序。
   * @param {Object} sortObj - 用于排序的对象。
   * @param {Object} sortData - 包含排序属性和排序顺序的对象。
   * @param {Function} fn - 获取表格数据的函数。
   * @returns {any} 根据传入的函数返回值，或者抛出错误。
   */
  function hooks_sortTableByProps(sortObj: any, sortData: any, fn: any) {
    const _sortObj = _.cloneDeep(sortObj)
    _sortObj[sortData.prop] = sortData.order

    Object.assign(tableQueryData, _sortObj)

    if (fn) {
      return _.isFunction(fn) && hooks_getTableData(fn)
    } else {
      throw new Error('需要传递一个函数！例如：sortTableByProps(fn)')
    }
  }

  /**
   * 用于更改表格页大小。
   * @param {Function} fn - 获取表格数据的函数。
   * @returns {any} 根据传入的函数返回值，或者抛出错误。
   */
  function hooks_changeTablePageSize(fn: any) {
    tableQueryData.pageNum = 1
    if (fn) {
      return _.isFunction(fn) && hooks_getTableData(fn)
    } else {
      throw new Error('需要传递一个函数！例如：changeTablePageSize(fn)')
    }
  }

  /**
   * 用于处理表格的搜索操作。
   * @param {Function} fn - 获取表格数据的函数。
   */
  function hooks_handleSearch(fn: any) {
    Object.assign(tableQueryData, searchData)
    hooks_getTableData(fn)
  }

  /**
   * 重置所有与钩子相关的数据和值。
   *
   * @param {function} fn - 在重置数据后要执行的函数。
   * @return {undefined} 此函数不返回任何内容。
   */
  function hooks_resetAllData() {
    Object.assign(tableQueryData, initQueryData())
    Object.assign(searchData, initQueryData())

    tableLoading.value = false
    tablePage.value = []
    totalPages.value = 0
  }

  return {
    tableLoading,
    tableQueryData,
    searchData,
    tablePage,
    totalPages,
    hooks_getTableData,
    hooks_resetQueryTable,
    hooks_changeTablePageSize,
    hooks_sortTableByProps,
    hooks_handleSearch,
    hooks_resetAllData,
  }
}
