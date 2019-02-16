import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import About from './About'


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path='/about' component={About} />
      </Switch>
    </div>
  );
}

export default App