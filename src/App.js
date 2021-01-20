// import Header from './components/header'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import routes from '@/router'

function App() {

  const reversedRoutes = reverseRoutes(routes)

  return (
    <div className="App">
      {/* <Header></Header> */}
      <Router>
        <Switch>
          {/* <Route path="/login" component={routes[1].component}></Route>
          <Route path="/" component={routes[0].component}></Route> */}
          { reversedRoutes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route}></RouteWithSubRoutes>
          )) }
        </Switch>
      </Router>
    </div>
  );
}

function reverseRoutes (routes) {
  let result = []
  for (let i=routes.length - 1; i >= 0; i--) {
    result.push(routes[i])
  }
  return result
}

function RouteWithSubRoutes(route) {
  console.log(route, 'route')
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
      // children={props => (
      //   <div>{props.history}{props.location}</div>
      // )}
    />
  );
}

export default App;
