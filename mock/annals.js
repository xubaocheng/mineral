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
	},
	{
		url: '/vue-admin-template/figures',
		type: 'post',
		response: config => {
			return {
				'code': 20000,
				'data': [
					{
						img: '1.png',
						name: '鲁迅',
						major: '地质学、矿床学家',
						date: '（1898.9.7 —— 1966.8.14）',
						university: '中国著名地质学家，中国科学院院士、第三世界科学院院士、欧亚科学院院士',
						evaluate: '地质科学研究者奖用来奖励在地质科学研究领域作出重要贡献的人员，包括在地质学某学科蜮领域中，有重要的新创见或发现，或经总结后丰富、发展和提高了某项地质学科领域理论者；在地质实验工作中，有新的发明创造、改革仪器设备并取得显著经济或社会效益，或提出某种新技术、方法和理论者；通过科研工作，对地质工作及资源勘查、开发利用提出重要建议，并取得显著社会和经济效益者；创造性开展科研组织管理工作，并做出重要贡献者。'
					},
					{
						img: '2.png',
						name: '翁文灏',
						major: '地质学、矿床学家',
						date: '（1898.9.7 —— 1966.8.14）',
						university: '中国著名地质学家，中国科学院院士、第三世界科学院院士、欧亚科学院院士',
						evaluate: '地质科学研究者奖用来奖励在地质科学研究领域作出重要贡献的人员，包括在地质学某学科蜮领域中，有重要的新创见或发现，或经总结后丰富、发展和提高了某项地质学科领域理论者；在地质实验工作中，有新的发明创造、改革仪器设备并取得显著经济或社会效益，或提出某种新技术、方法和理论者；通过科研工作，对地质工作及资源勘查、开发利用提出重要建议，并取得显著社会和经济效益者；创造性开展科研组织管理工作，并做出重要贡献者。'
					},
					{
						img: '3.png',
						name: '章鸿钊',
						major: '地质学、矿床学家',
						date: '（1898.9.7 —— 1966.8.14）',
						university: '中国著名地质学家，中国科学院院士、第三世界科学院院士、欧亚科学院院士',
						evaluate: '地质科学研究者奖用来奖励在地质科学研究领域作出重要贡献的人员，包括在地质学某学科蜮领域中，有重要的新创见或发现，或经总结后丰富、发展和提高了某项地质学科领域理论者；在地质实验工作中，有新的发明创造、改革仪器设备并取得显著经济或社会效益，或提出某种新技术、方法和理论者；通过科研工作，对地质工作及资源勘查、开发利用提出重要建议，并取得显著社会和经济效益者；创造性开展科研组织管理工作，并做出重要贡献者。'
					},
					{
						img: '4.png',
						name: '丁文江',
						major: '地质学、矿床学家',
						date: '（1898.9.7 —— 1966.8.14）',
						university: '中国著名地质学家，中国科学院院士、第三世界科学院院士、欧亚科学院院士',
						evaluate: '地质科学研究者奖用来奖励在地质科学研究领域作出重要贡献的人员，包括在地质学某学科蜮领域中，有重要的新创见或发现，或经总结后丰富、发展和提高了某项地质学科领域理论者；在地质实验工作中，有新的发明创造、改革仪器设备并取得显著经济或社会效益，或提出某种新技术、方法和理论者；通过科研工作，对地质工作及资源勘查、开发利用提出重要建议，并取得显著社会和经济效益者；创造性开展科研组织管理工作，并做出重要贡献者。'
					},
					{
						img: '5.png',
						name: '李四光',
						major: '地质学、矿床学家',
						date: '（1898.9.7 —— 1966.8.14）',
						university: '中国著名地质学家，中国科学院院士、第三世界科学院院士、欧亚科学院院士',
						evaluate: '地质科学研究者奖用来奖励在地质科学研究领域作出重要贡献的人员，包括在地质学某学科蜮领域中，有重要的新创见或发现，或经总结后丰富、发展和提高了某项地质学科领域理论者；在地质实验工作中，有新的发明创造、改革仪器设备并取得显著经济或社会效益，或提出某种新技术、方法和理论者；通过科研工作，对地质工作及资源勘查、开发利用提出重要建议，并取得显著社会和经济效益者；创造性开展科研组织管理工作，并做出重要贡献者。'
					},
					{
						img: '6.png',
						name: '谢家荣',
						major: '地质学、矿床学家',
						date: '（1898.9.7 —— 1966.8.14）',
						university: '中国著名地质学家，中国科学院院士、第三世界科学院院士、欧亚科学院院士',
						evaluate: '地质科学研究者奖用来奖励在地质科学研究领域作出重要贡献的人员，包括在地质学某学科蜮领域中，有重要的新创见或发现，或经总结后丰富、发展和提高了某项地质学科领域理论者；在地质实验工作中，有新的发明创造、改革仪器设备并取得显著经济或社会效益，或提出某种新技术、方法和理论者；通过科研工作，对地质工作及资源勘查、开发利用提出重要建议，并取得显著社会和经济效益者；创造性开展科研组织管理工作，并做出重要贡献者。'
					}
				],
				'msg': '成功'
			}
		}
	},
	{
		url: '/vue-admin-template/detail',
		type: 'post',
		response: config => {
			return {
				'code': 20000,
				data:
					{
						title: '@ctitle()',
						date: '@now()',
						source: '@cword(4, 3)',
						author: '@cname()',
						fontSize: '大 中 小',
						pageviews: '@increment(1000)',
						'paragraph|5': ['@cparagraph(10, 30)'],
						'img|2': ['@image(400 x 300)']
					},
				'msg': '成功'
			}
		}
	},
	{
		url: '/vue-admin-template/mineralProductsList',
		type: 'post',
		response: config => {
			return {
				'code': 20000,
				'data|30':
					[{
						title: '@ctitle()',
						date: '@date()',
						author: '@cname()',
						paragraph: '@cparagraph(2,4)',
						img: '@image(120 x 160)'
					}],
				'msg': '成功'
			}
		}
	}
]
