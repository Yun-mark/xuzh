// 用户相关请求模块

import request from '@/utils/api/request'
// 使用qs：将数据序列化成url格式
import qs from 'qs'
// 用户登录
export const login = data => {
  return request({
    method: 'POST',
    url: `/user/login`,
    data: qs.stringify(data),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}
