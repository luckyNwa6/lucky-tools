export default [
  // 查询全部字典数据列表
  {
    url: '/api/system/dict-data/list-all-simple', //请求地址
    method: 'get', //请求方式
    response: () => {
      return { code: 200, data: createdDict() }
    },
  },
]

// 表格数据
function createdDict() {
  return [
    { dictType: 'bpm_model_category', value: '1', label: '默认', colorType: 'primary', cssClass: '' },

    { dictType: 'bpm_model_category', value: '2', label: 'oa', colorType: 'success', cssClass: '' },

    { dictType: 'system_operate_type', value: '0', label: '其它', colorType: 'info', cssClass: '' },

    { dictType: 'system_operate_type', value: '1', label: '查询', colorType: 'info', cssClass: '' },

    { dictType: 'system_operate_type', value: '2', label: '新增', colorType: 'primary', cssClass: '' },

    { dictType: 'system_operate_type', value: '3', label: '修改', colorType: 'warning', cssClass: '' },

    { dictType: 'system_operate_type', value: '4', label: '删除', colorType: 'danger', cssClass: '' },

    { dictType: 'system_operate_type', value: '5', label: '导出', colorType: 'success', cssClass: '' },

    { dictType: 'system_operate_type', value: '6', label: '导入', colorType: 'success', cssClass: '' },
  ]
}
