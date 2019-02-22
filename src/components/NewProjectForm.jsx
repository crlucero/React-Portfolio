import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

function NewProjectForm(props){
    let _name = null;
    let _description = null;
    let _link = null;
    let _liveLink = null;

    function handleNewProject(event) {
        event.preventDefault();
        props.onNewProjCreation({ name: _name.value, description: _description.value, link: _link.value, liveLink: _liveLink.value, id: v4() })
        _name.value ='';
        _description.value ='';
        _link.value ='';
        _liveLink.value ='';
    }

    return (
        <div>
            <form onSubmit={handleNewProject}>
                <input 
                    type='text'
                    id='name'
                    placeholder='Project Name'
                    ref={(input) => { _name = input; }}
                    />
                <input 
                    type='text'
                    id='description'
                    placeholder='Project Description'
                    ref={(input) => { _description = input; }}
                    />
                <input 
                    type='text'
                    id='link'
                    placeholder='Github Link'
                    ref={(input) => { _link = input; }}
                    />
                <input 
                    type='text'
                    id='liveLink'
                    placeholder='Live Link to Project'
                    ref={(input) => { _liveLink = input; }}
                    />
                <button type='submit' > Add Project </button>
            </form>
        </div>
    )
}

NewProjectForm.propTypes = {
    onNewProjCreation: PropTypes.func
}
export default NewProjectForm;