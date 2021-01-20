import Header from '@/components/header'
import { Switch, Route, Link } from 'react-router-dom'

function Home ({ routes }) {
  return (
    <div>
      <Header></Header>
      <div>Home</div>
      <Link to="/child">child</Link>
      <Switch>
        { routes.map((route, i) => (
          <Route key={i} {...route}></Route>
        ))}
      </Switch>
    </div>
  )
}

export default Home
