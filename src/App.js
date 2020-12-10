import React, { Component, Suspense } from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import HeaderComponent from './components/Header/HeaderContainer';
import { connect, Provider } from 'react-redux';
import { initializeApp} from './redux/appReducer';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/reduxStore';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const News = React.lazy(() => import('./components/News/News'));
const Music = React.lazy(() => import('./components/Music/Music'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const Login = React.lazy(() => import('./components/Login/Login'));



class App extends Component {

	componentDidMount() {
        this.props.initializeApp();
    }

	render() {
		if(!this.props.initialized) {
			return <Preloader />
		}  
		return (
			<div className='app-wrapper'>
				<HeaderComponent />
				<Navbar />
				<div className='app-wrapper-content'>
					<Suspense fallback={<div> Loading... </div>}>
						<Route path='/dialogs' render= { () => <DialogsContainer  />} />
						<Route path='/profile/:userid?' render= { () => <ProfileContainer />} />
						<Route path='/news' render= { () => <News />} />
						<Route path='/music' render= { () => <Music />} />
						<Route path='/settings' render= { () => <Settings />} />
						<Route path='/users' render= { () => <UsersContainer />} />
						<Route path='/login' render= { () => <Login /> } />
					</Suspense>
				</div>
			</div>
			);
		}
	}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
});

let AppContainer = compose(
	withRouter,
	connect(mapStateToProps, { initializeApp }))(App);

let MainApp = (props) => {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<AppContainer /> 
			</Provider>
		</BrowserRouter>
	)
}

export default MainApp;