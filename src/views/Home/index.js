import Header from '@/components/header'
import './index.css'
import { Switch, Route, Link, Redirect } from 'react-router-dom'

function Home ({ routes, location }) {
  console.log(routes, location)

  // 判断是否有重定向子路由，获取该子路由
  function getRedirect (routes) {
    for( let route of routes) {
      if (route.redirect) return route.path
    }
    return false
  }

  const redirect = getRedirect(routes)

  return (
    <div>
      <Header></Header>
      <div className="home-wrap">
        Home
        <Switch>
          { routes.map((route, i) => (
            <Route exact key={i} {...route}></Route>
          ))}
          { /* 如果有重定向的路由，便进行重定向（也就是显示默认的子路由） */ }  
          { redirect ? <Redirect to={redirect}/> : ''}
        </Switch>
      </div>
    </div>
  )
}

export default Home
