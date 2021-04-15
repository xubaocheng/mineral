import request from '@/utils/request'
const baseUrl = '/vue-admin-template'
/**
 *
 * @param {xxx,xxx,xxx} params
 */
// 列表详情
export function mineralProductsList(params) {
	return request({
		url: `${baseUrl}/mineralProductsList`,
		method: 'post',
		params
	})
}
