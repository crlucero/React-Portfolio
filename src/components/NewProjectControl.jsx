import React from 'react'
import PropTpes from 'prop-types'
import NewProjectForm from './NewProjectForm'

class NewProjControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <NewProjectForm
                    onNewProjCreation={this.props.onNewProjCreation} />
            </div>
        )
    }
}

NewProjControl.propTypes = {
    onNewProjCreation: PropTpes.func
}
export default NewProjControl;