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
				meta: { title: '首页', icon: 'home' }
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
						meta: { title: '总叙', icon: 'home' }
					},
					{
						path: 'editor-in-chief',
						name: 'editor-in-chief',
						component: () => import('@/views/annals/components/editor-in-chief'),
						meta: { title: '总主编', icon: 'home' }
					},
					{
						path: 'organization-management',
						name: 'organization-management',
						component: () => import('@/views/annals/components/organization-management'),
						meta: { title: '组织管理', icon: 'home' }
					},
					{
						path: 'memorabilia',
						name: 'memorabilia',
						component: () => import('@/views/annals/components/memorabilia'),
						meta: { title: '大事记', icon: 'home' }
					},
					{
						path: 'geological-figures',
						name: 'geological-figures',
						component: () => import('@/views/annals/components/geological-figures'),
						meta: { title: '地质人物', icon: 'home' }
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
				meta: { title: '新闻资讯', icon: 'home' }
			},
			{
				path: 'newsDetail',
				name: 'newsDetail',
				component: () => import('@/views/news/detail'),
				meta: { title: '资讯详情', icon: 'home' }
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
				meta: { title: '书记天下矿产', icon: 'home' }
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
				meta: { title: '图示古今资源', icon: 'home' }
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
				meta: { title: '库存海量信息', icon: 'home' }
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
				meta: { title: '普及地学文明', icon: 'home' }
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
