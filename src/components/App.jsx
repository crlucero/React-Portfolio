import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import About from './About'
import PortfolioList from './PortfolioList'
import Social from './Social'
import Admin from './Admin'
import NewProjectControl from './NewProjectControl';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      projectList: []
    };
    this.handleAddingNewProjToList = this.handleAddingNewProjToList.bind(this);
  }

  handleAddingNewProjToList(newProj) {
    var newProjectList = this.state.projectList.slice();
    newProjectList.push(newProj);
    this.setState({projectList: newProjectList});
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" render={() => <PortfolioList portfolioList={this.state.projectList} />} />
          <Route path="/social" component={Social} />
          <Route
            path="/admin"
            render={() => (
              <NewProjectControl
                onNewProjCreation={this.handleAddingNewProjToList}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App