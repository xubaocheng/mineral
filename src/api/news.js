import request from '@/utils/request'
const baseUrl = '/vue-admin-template'
/**
 *
 * @param {xxx,xxx,xxx} params
 */
// 列表详情
export function detail(params) {
	return request({
		url: `${baseUrl}/detail`,
		method: 'post',
		params
	})
}
