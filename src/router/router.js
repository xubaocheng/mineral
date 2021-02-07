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
