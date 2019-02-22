import React from 'react'
import NewProjectControl from './NewProjectControl';
import PortfolioList from './PortfolioList';

function Admin(props) {
    return (
      <div>
        <h1>Admin</h1>
            <NewProjectControl />
            <PortfolioList />
      </div>
    );
}
export default Admin;