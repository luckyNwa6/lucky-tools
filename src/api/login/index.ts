import request from '@/utils/request'
enum API {
  LOGIN_URL = '/sys/login',
}

export const reqLoginX = (data: any) =>
  request.post<any, any>(API.LOGIN_URL, data)
