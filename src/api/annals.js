import request from '@/utils/request'
const baseUrl = '/vue-admin-template'
/**
 *
 * @param {xxx,xxx,xxx} params
 */
// 组织管理
export function organization(params) {
	return request({
		url: `${baseUrl}/organization`,
		method: 'post',
		params
	})
}

/**
 *
 * @param {xxx,xxx,xxx} params
 */
// 大事记
export function memorabilia(params) {
	return request({
		url: `${baseUrl}/memorabilia`,
		method: 'post',
		params
	})
}
