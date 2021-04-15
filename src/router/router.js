import Layout from '@/layout'
// 默认不需要权限的页面
export const constantRouterMap = [
	{
		path: '/login',
		component: () => import('@/views/login/index'),
		hidden: true
	},

	{
		path: '/404',
		component: () => import('@/views/404'),
		hidden: true
	},

	{
		path: '/',
		component: Layout,
		redirect: '/home',
		children: [
			{
				path: 'home',
				name: 'home',
				component: () => import('@/views/home/index'),
				meta: { title: '首页', icon: 'home', activeMenu: 'home' }
			}
		]
	},
	{
		path: '/annals',
		component: Layout,
		redirect: '/annals/annalsIndex',
		children: [
			{
				path: 'annalsIndex',
				name: 'annalsIndex',
				component: () => import('@/views/annals/index'),
				meta: { title: '志书概况', icon: 'home' },
				redirect: '/annals/annalsIndex/general-introduction',
				children: [
					{
						path: 'general-introduction',
						name: 'general-introduction',
						component: () => import('@/views/annals/components/general-introduction'),
						meta: { title: '总叙', icon: 'home', activeMenu: 'annalsIndex' }
					},
					{
						path: 'editor-in-chief',
						name: 'editor-in-chief',
						component: () => import('@/views/annals/components/editor-in-chief'),
						meta: { title: '总主编', icon: 'home', activeMenu: 'annalsIndex' }
					},
					{
						path: 'organization-management',
						name: 'organization-management',
						component: () => import('@/views/annals/components/organization-management'),
						meta: { title: '组织管理', icon: 'home', activeMenu: 'annalsIndex' }
					},
					{
						path: 'memorabilia',
						name: 'memorabilia',
						component: () => import('@/views/annals/components/memorabilia'),
						meta: { title: '大事记', icon: 'home', activeMenu: 'annalsIndex' }
					},
					{
						path: 'geological-figures',
						name: 'geological-figures',
						component: () => import('@/views/annals/components/geological-figures'),
						meta: { title: '地质人物', icon: 'home', activeMenu: 'annalsIndex' }
					}
				]
			}

		]
	},
	{
		path: '/news',
		component: Layout,
		redirect: '/news/newsIndex',
		children: [
			{
				path: 'newsIndex',
				name: 'newsIndex',
				component: () => import('@/views/news/index'),
				meta: { title: '列表', icon: 'home', breadcrumb: false },
				redirect: '/news/newsIndex/newsList',
				children: [
					{
						path: 'newsList',
						name: 'newsList',
						component: () => import('@/views/news/components/newsList'),
						meta: { title: '新闻资讯', icon: 'home', activeMenu: 'newsIndex' }
					},
					{
						path: 'achievementsList',
						name: 'achievementsList',
						component: () => import('@/views/news/components/achievementsList'),
						meta: { title: '成果快讯', icon: 'home', activeMenu: 'newsIndex' }
					},
					{
						path: 'newsDetail',
						name: 'newsDetail',
						component: () => import('@/views/news/components/detail'),
						meta: { title: '列表详情', icon: 'home', activeMenu: 'newsIndex' }
					}
				]
			}
		]
	},
	{
		path: '/mineralProducts',
		component: Layout,
		redirect: '/mineralProducts/mineralProductsIndex',
		children: [
			{
				path: 'mineralProductsIndex',
				name: 'mineralProductsIndex',
				component: () => import('@/views/mineralProducts/index'),
				meta: { title: '书记天下矿产', icon: 'home', activeMenu: 'mineralProductsIndex' },
				redirect: '/mineralProducts/mineralProductsIndex/general-records',
				children: [
					{
						path: 'general-records',
						name: 'general-records',
						component: () => import('@/views/mineralProducts/components/general-records'),
						meta: { title: '总志', activeMenu: 'mineralProductsIndex' }
					},
					{
						path: 'mineral-records',
						name: 'mineral-records',
						component: () => import('@/views/mineralProducts/components/mineral-records'),
						meta: { title: '矿种志书', activeMenu: 'mineralProductsIndex' }
					},
					{
						path: 'provincial-chronicles',
						name: 'provincial-chronicles',
						component: () => import('@/views/mineralProducts/components/provincial-chronicles'),
						meta: { title: '省级志书', activeMenu: 'mineralProductsIndex' }
					},
					{
						path: 'local-records',
						name: 'local-records',
						component: () => import('@/views/mineralProducts/components/local-records'),
						meta: { title: '区带志书', activeMenu: 'mineralProductsIndex' }
					},
					{
						path: 'special-report',
						name: 'special-report',
						component: () => import('@/views/mineralProducts/components/special-report'),
						meta: { title: '专题报告', activeMenu: 'mineralProductsIndex' }
					},
					{
						path: 'popular-edition',
						name: 'popular-edition',
						component: () => import('@/views/mineralProducts/components/popular-edition'),
						meta: { title: '普及本', activeMenu: 'mineralProductsIndex' }
					}

				]
			}
		]
	},
	{
		path: '/resources',
		component: Layout,
		redirect: '/resources/resourcesIndex',
		children: [
			{
				path: 'resourcesIndex',
				name: 'resourcesIndex',
				component: () => import('@/views/resources/index'),
				meta: { title: '图示古今资源', icon: 'home', activeMenu: 'resourcesIndex' }
			}
		]
	},
	{
		path: '/information',
		component: Layout,
		redirect: '/information/informationIndex',
		children: [
			{
				path: 'informationIndex',
				name: 'informationIndex',
				component: () => import('@/views/information/index'),
				meta: { title: '库存海量信息', icon: 'home', activeMenu: 'informationIndex' }
			}
		]
	},
	{
		path: '/civilization',
		component: Layout,
		redirect: '/civilization/civilizationIndex',
		children: [
			{
				path: 'civilizationIndex',
				name: 'civilizationIndex',
				component: () => import('@/views/civilization/index'),
				meta: { title: '普及地学文明', icon: 'home', activeMenu: 'civilizationIndex' }
			}
		]
	},
	{
		path: '/test',
		component: Layout,
		redirect: '/test/test',
		children: [
			{
				path: 'test',
				name: 'test',
				component: () => import('@/views/test/test'),
				meta: { title: '测试', icon: 'home' }
			}
		]
	}
]

// 异步路由（需要权限的页面）
export const asyncRouterMap = [
	// 404 page must be placed at the end !!!
	{ path: '*', redirect: '/404', hidden: true }
]
