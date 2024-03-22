import request from '@/utils/request'

enum API {
  TABLE_PAGE_URL = '/home-list/page',
}

//表格分页
export const reqTablePage = (data: any) =>
  request.get<any, any>(API.TABLE_PAGE_URL, { params: data })
