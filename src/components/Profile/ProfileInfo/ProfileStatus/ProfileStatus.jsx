import React from 'react';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    toogleEditMode = (bool) => {
        this.setState({ editMode: bool });
        if (!bool) {
            this.props.updateStatus(this.state.status);
        }
    }

    onStatusChange = (e) => {
	    this.setState({status: e.currentTarget.value});
    }
    
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        console.log("render");
        return (
            <div>
                {!this.state.editMode
                    ? <div>
                        <span onDoubleClick={() => this.toogleEditMode(true)}>{this.state.status || "No status"}</span>
                    </div>
                    : <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={() => this.toogleEditMode(false)} defaultValue={this.state.status}></input>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;
