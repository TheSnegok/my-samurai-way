import { connect } from "react-redux";
import Sidebar from './Sidebar/Sidebar';
import { compose } from "redux";

const dataNavbarContainer = (state) => {
    return {
        mas: state.sidebar.users
    }
}

compose(
    connect(dataNavbarContainer)
)(Sidebar);