import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import About from './About'
import PortfolioList from './PortfolioList'
import Social from './Social'


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path='/about' component={About} />
        <Route path='/portfolio' component={PortfolioList} />
        <Route path='/social' component={Social} />
      </Switch>
    </div>
  );
}

export default App