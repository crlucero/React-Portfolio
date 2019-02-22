import React from 'react'
import NewProjectForm from './NewProjectForm';
import PortfolioList from './PortfolioList';

function Admin(props) {
    return (
      <div>
        <h1>Admin</h1>
            <NewProjectForm />
        <PortfolioList projectList={props.projectList} />
      </div>
    );
}
export default Admin;