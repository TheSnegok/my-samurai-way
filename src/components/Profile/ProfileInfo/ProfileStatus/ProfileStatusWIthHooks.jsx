import React, { useEffect, useState } from 'react';

const ProfileStatusWithHooks = (props) => {
    
    const [state, setState] = useState(false);
    const [status, setStatus] = useState(props.status == null ? '' : props.status);

    useEffect(() => {
        setStatus(props.status);
    },[props.status]);

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
            <b>Status: </b>
            {!state
                ? <span onDoubleClick={activateEditMode}>{props.status || "No status"}</span>
                : <input onChange={onStatusChange} onBlur={deActivateEditMode} autoFocus={true} value={status}></input>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;
