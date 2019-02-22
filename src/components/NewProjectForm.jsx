import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

function NewProjectForm(props){
    let _name = null;
    let _description = null;
    let _link = null;
    let _liveLink = null;

    function handleNewProjectSubmit(event) {
        event.preventDefault();
        props.onNewProjCreation({ name: _name.value, description: _description.value, link: _link.value, liveLink: _liveLink.value, id: v4() })
        _name.value ='';
        _description.value ='';
        _link.value ='';
        _liveLink.value ='';
    }

    return (
      <div>
        <style jsx>
          {`
            @import url("https://fonts.googleapis.com/css?family=Oswald:300,400,700");
            .body {
              margin: -9px;
              font-family: "Oswald", sans-serif;
              letter-spacing: 2px;
              background: linear-gradient(to right, #283048, #859398);
              padding-top: 5px;
              padding-bottom: 100px;
              height: 100vh;
            }
            form {
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              margin: 25px;
              align-content: center;
            }
            button {
                height: 25px;
                width: 100px;
                margin-top: 5px;
                margin-left: 5px;
                background-color: grey;
                color: white;
                border: solid 1px grey;
                border-radius: 5px;
            }
            input {
                margin: 5px;
                padding: 5px;
            }
          `}
        </style>
        <div className="body">
          <form onSubmit={handleNewProjectSubmit}>
            <input
              type="text"
              id="name"
              placeholder="Project Name"
              ref={input => {
                _name = input;
              }}
            />
            <input
              type="text"
              id="description"
              placeholder="Project Description"
              ref={input => {
                _description = input;
              }}
            />
            <input
              type="text"
              id="link"
              placeholder="Github Link"
              ref={input => {
                _link = input;
              }}
            />
            <input
              type="text"
              id="liveLink"
              placeholder="Live Link to Project"
              ref={input => {
                _liveLink = input;
              }}
            />
            <button type="submit"> Add Project </button>
          </form>
        </div>
      </div>
    );
}

NewProjectForm.propTypes = {
    onNewProjCreation: PropTypes.func
}
export default NewProjectForm;