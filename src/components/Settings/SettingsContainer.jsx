import React from 'react';
import Settings from "./Settings";

const SettingsContainer = () => {
    return (
        <>
            <Settings />
        </>
    );
}

const mapStateToProps = (state) => {
    langueges: state.settings.langueges
}

export default SettingsContainer;