import Vue from 'vue'
import VueRouter from 'vue-router'
// 外网路由懒加载
const Index = () => import('../views/page/Index')
const AboutUs = () => import('../views/page/aboutUs/AboutUs')
const Competition = () => import('views/page/competition/Competition')
const JionUs = () => import('views/page/joinUs/JoinUs')
const Plan = () => import('../views/page/plan/Plan')
const Story = () => import('views/page/story/Story')
const Login = () => import('../views/page/login/Login')
// 内网路由懒加载及导入
const Card = () => import('../views/pageIn/home/components/Card')
const Admin = () => import('views/pageIn/admin/Admin')
const Home = () => import('views/pageIn/home/Home')
const Statement = () => import('views/pageIn/statement/Statement')
const Memory = () => import('../views/pageIn/memory/Memory')
const Clock = () => import('../views/pageIn/clock/Clock')
const Group = () => import('../views/pageIn/group/Group')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/aboutUs',
  },
  {
    path: '/index',
    name: '首页',
    component: Index,
    redirect: '/aboutUs',
    children: [
      {
        path: '/aboutUs',
        name: 'aboutUs',
        component: AboutUs
      },
      {
        path: '/competition',
        name: 'competition',
        component: Competition
      },
      {
        path: '/joinUs',
        name: 'joinUs',
        component: JionUs
      },
      {
        path: '/plan',
        name: 'plan',
        component: Plan
      },
      {
        path: '/story',
        name: 'story',
        component: Story
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/page',
    redirect: '/page/home'
  },
  {
    path: '/page/home',
    name: 'home',
    component: Home,
    children: [
      {
        path: '/page/card',
        name: 'card',
        component: Card
      },
      {
        path: '/page/admin',
        name: 'admin',
        component: Admin
      },
      {
        path: '/page/memory',
        name: 'memory',
        component: Memory
      },
      {
        path: '/page/clock',
        name: 'clock',
        component: Clock
      },
      {
        path: '/page/statement',
        name: 'statement',
        component: Statement
      },
      {
        path: '/page/group',
        name: 'group',
        component: Group
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})
//  挂载路由导航守卫
router.beforeEach((to, from, next) => {
  const user = JSON.parse(window.sessionStorage.getItem('user'))
  if (to.path === '/page/admin' || to.path === '/page/home' || to.path === '/page/list' || to.path === '/page/user' ||
  to.path === '/page/statement') {
    if (user) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})
export default router
