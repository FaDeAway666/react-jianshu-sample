import Home from '@/views/Home'
import Login from '@/views/Login'
import Child from '@/views/Home/child'
import List from '@/views/Home/list'

const routes = [
  {
    path: '/',
    component: Home,
    routes: [
      {
        path: '/child',
        component: Child,
      },
      {
        path: '/list',
        component: List,
        redirect: true,
      }
    ]
  },
  {
    path: '/login',
    component: Login
  }
]

export default routes
