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
				meta: { title: '志书概况', icon: 'home' }
			}
		]
	},
	{
		path: '/news',
		component: Layout,
		redirect: '/news/annalsIndex',
		children: [
			{
				path: 'newsIndex',
				name: 'newsIndex',
				component: () => import('@/views/annals/index'),
				meta: { title: '新闻资讯', icon: 'home' }
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
