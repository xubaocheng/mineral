// const Mock = require('mockjs')

// const data = Mock.mock({
// 	'items|30': [{
// 		id: '@id',
// 		title: '@sentence(10, 20)',
// 		'status|1': ['published', 'draft', 'deleted'],
// 		author: 'name',
// 		display_time: '@datetime',
// 		pageviews: '@integer(300, 5000)'
// 	}]
// })

module.exports = [
	{
		url: '/vue-admin-template/organization',
		type: 'post',
		response: config => {
			return {
				'code': 20000,
				'data': [
					{
						heading: '一、领导小组',
						group: [
							{
								title: '组长',
								list: [
									{
										name: '@cname(2,3)',
										synopsis: '@ctitle(9, 18)'

									}
								]
							},
							{
								title: '副组长',
								'list|3': [
									{
										name: '@cname(2,3)',
										synopsis: '@ctitle(9, 18)'

									}
								]
							},
							{
								title: '成员',
								'list|3': [
									{
										name: '@cname(3)',
										synopsis: '@ctitle(9, 18)'

									}
								]
							}
						]
					},
					{
						heading: '二、专家委员会',
						group: [
							{
								title: '主任',
								list: [
									{
										name: '@cname(2,3)'
									}
								]
							},
							{
								title: '副主任',
								'list|4': [
									{
										name: '@cname(2,3)'
									}
								]
							},
							{
								title: '成员',
								'list|90': [
									{
										name: '@cname(3)'
									}
								]
							}
						]
					},
					{
						heading: '三、承担单位',
						title: '@ctitle(9, 18)'
					},
					{
						heading: '四、项目办公室',
						group: [
							{
								title: '主任',
								list: [
									{
										name: '@cname(2,3)'
									}
								]
							},
							{
								title: '副主任',
								'list|3': [
									{
										name: '@cname(2,3)'
									}
								]
							},
							{
								title: '成员',
								'list|2': [
									{
										name: '@cname(3)'
									}
								]
							}
						]
					},
					{
						heading: '五、责任编辑组',
						'list|16': [
							{
								name: '@cname(3)'
							}
						]
					}
				],
				'msg': '成功'
			}
		}
	},
	{
		url: '/vue-admin-template/memorabilia',
		type: 'post',
		response: config => {
			return {
				'code': 20000,
				'data': [
					{
						year: '2021年',
						title: '主委会成立',
						describe: '自定义提示描述信息',
						mVisiable: true,
						list: [
							{
								date: '1月21日',
								describe: '自定义提示描述信息'
							},
							{
								date: '1月21日',
								describe: '自定义提示描述信息'
							},
							{
								date: '1月21日',
								describe: '自定义提示描述信息'
							}
						]
					},
					{
						year: '2020年',
						title: '主委会成立',
						describe: '自定义提示描述信息',
						mVisiable: false,
						list: [
							{
								date: '1月21日',
								describe: '自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息'
							},
							{
								date: '1月21日',
								describe: '自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息'
							},
							{
								date: '1月21日',
								describe: '自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息'
							}
						]
					},
					{
						year: '2019年',
						title: '主委会成立',
						describe: '自定义提示描述信息',
						mVisiable: false,
						list: [
							{
								date: '1月21日',
								describe: '自定义提示描述信息xxxx'
							},
							{
								date: '1月21日',
								describe: '自定义提示描述信息tttt'
							},
							{
								date: '1月21日',
								describe: '自定义提示描述信息wwwww'
							}
						]
					},
					{
						year: '2018年',
						title: '主委会成立',
						describe: '自定义提示描述信息',
						mVisiable: false,
						list: [
							{
								date: '1月21日',
								describe: '自定义提示描述信息'
							},
							{
								date: '1月21日',
								describe: '自定义提示描述信息'
							},
							{
								date: '1月21日',
								describe: '自定义提示描述信息'
							}
						]
					},
					{
						year: '2017年',
						title: '主委会成立',
						describe: '自定义提示描述信息',
						mVisiable: false,
						list: [
							{
								date: '1月21日',
								describe: '自定义提示描述信息'
							},
							{
								date: '1月21日',
								describe: '自定义提示描述信息'
							},
							{
								date: '1月21日',
								describe: '自定义提示描述信息'
							}
						]
					},
					{
						year: '2016年',
						title: '主委会成立',
						describe: '自定义提示描述信息',
						mVisiable: false,
						list: [
							{
								date: '1月21日',
								describe: '自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息'
							},
							{
								date: '1月21日',
								describe: '自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息'
							},
							{
								date: '1月21日',
								describe: '自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息'
							}
						]
					},
					{
						year: '2015年',
						title: '主委会成立',
						describe: '自定义提示描述信息',
						mVisiable: false,
						list: [
							{
								date: '1月21日',
								describe: '自定义提示描述信息xxxx'
							},
							{
								date: '1月21日',
								describe: '自定义提示描述信息tttt'
							},
							{
								date: '1月21日',
								describe: '自定义提示描述信息wwwww'
							}
						]
					},
					{
						year: '2014年',
						title: '主委会成立',
						describe: '自定义提示描述信息',
						mVisiable: false,
						list: [
							{
								date: '1月21日',
								describe: '自定义提示描述信息'
							},
							{
								date: '1月21日',
								describe: '自定义提示描述信息'
							},
							{
								date: '1月21日',
								describe: '自定义提示描述信息'
							}
						]
					},
					{
						year: '2013年',
						title: '主委会成立',
						describe: '自定义提示描述信息',
						mVisiable: false,
						list: [
							{
								date: '1月21日',
								describe: '自定义提示描述信息'
							},
							{
								date: '1月21日',
								describe: '自定义提示描述信息'
							},
							{
								date: '1月21日',
								describe: '自定义提示描述信息'
							}
						]
					},
					{
						year: '2012年',
						title: '主委会成立',
						describe: '自定义提示描述信息',
						mVisiable: false,
						list: [
							{
								date: '1月21日',
								describe: '自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息'
							},
							{
								date: '1月21日',
								describe: '自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息'
							},
							{
								date: '1月21日',
								describe: '自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息自定义提示描述信息'
							}
						]
					},
					{
						year: '2011年',
						title: '主委会成立',
						describe: '自定义提示描述信息',
						mVisiable: false,
						list: [
							{
								date: '1月21日',
								describe: '自定义提示描述信息xxxx'
							},
							{
								date: '1月21日',
								describe: '自定义提示描述信息tttt'
							},
							{
								date: '1月21日',
								describe: '自定义提示描述信息wwwww'
							}
						]
					},
					{
						year: '2010年',
						title: '主委会成立',
						describe: '自定义提示描述信息',
						mVisiable: false,
						list: [
							{
								date: '1月21日',
								describe: '自定义提示描述信息'
							},
							{
								date: '1月21日',
								describe: '自定义提示描述信息'
							},
							{
								date: '1月21日',
								describe: '自定义提示描述信息'
							}
						]
					},
					{
						year: '2009年',
						title: '主委会成立',
						describe: '自定义提示描述信息',
						mVisiable: false,
						list: [
							{
								date: '1月21日',
								describe: '自定义提示描述信息'
							},
							{
								date: '1月21日',
								describe: '自定义提示描述信息'
							},
							{
								date: '1月21日',
								describe: '自定义提示描述信息'
							}
						]
					},
					{
						year: '2008年',
						title: '主委会成立',
						describe: '自定义提示描述信息',
						mVisiable: false,
						list: [
							{
								date: '1月21日',
								describe: '自定义提示描述信息'
							},
							{
								date: '1月21日',
								describe: '自定义提示描述信息'
							},
							{
								date: '1月21日',
								describe: '自定义提示描述信息'
							}
						]
					},
					{
						year: '2007年',
						title: '主委会成立',
						describe: '自定义提示描述信息',
						mVisiable: false,
						list: [
							{
								date: '1月21日',
								describe: '自定义提示描述信息'
							},
							{
								date: '1月21日',
								describe: '自定义提示描述信息'
							},
							{
								date: '1月21日',
								describe: '自定义提示描述信息'
							}
						]
					},
					{
						year: '2006年',
						title: '主委会成立',
						describe: '自定义提示描述信息',
						mVisiable: false,
						list: [
							{
								date: '1月21日',
								describe: '自定义提示描述信息'
							},
							{
								date: '1月21日',
								describe: '自定义提示描述信息'
							},
							{
								date: '1月21日',
								describe: '自定义提示描述信息'
							}
						]
					}
				],
				'msg': '成功'
			}
		}
	}
]
