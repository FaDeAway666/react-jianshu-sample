import Home from '@/views/Home'
import Login from '@/views/Login'
import Child from '@/views/Home/child'

const routes = [
  {
    path: '/',
    component: Home,
    routes: [
      {
        path: '/child',
        component: Child
      }
    ]
  },
  {
    path: '/login',
    component: Login
  }
]

export default routes
