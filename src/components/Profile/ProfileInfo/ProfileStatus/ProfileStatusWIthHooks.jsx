import React, { useState } from 'react';

const ProfileStatusWithHooks = (props) => {
    
    const [state, setState] = useState(false);
    const [status, setStatus] = useState(props.status == null ? '' : props.status);

    const activateEditMode = () => {
        setState(true);
    }

    const deActivateEditMode = () => {
        setState(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
	    setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {!state
                ? <div>
                    <span onDoubleClick={activateEditMode}>{props.status || "No status"}</span>
                </div>
                : <div>
                    <input onChange={onStatusChange} onBlur={deActivateEditMode} autoFocus={true} value={status}></input>
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;
