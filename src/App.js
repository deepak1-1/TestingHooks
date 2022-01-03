import React, {useState, useReducer} from 'react';
import { Routes, Route, BrowserRouter as Router, useRoutes } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Login from './components/Login.js';
import UserPage from './components/UserPage.js';
import { isLogin } from './store/Context';

const AddRoute = () => {
	let routes = useRoutes([
	    { path: "/", element: <Login /> },
	    { path: "/user-page", element: <UserPage /> }
  	]);

  	return routes;
}

const initialState = {login_: false};

const IsLogin = (state, action) => {

	switch(action.type){
		case 'Admin':
			return {login_: 'Admin'};
		case 'User':
			return {login_: 'User'};
		default:
			return {login_: false}; 
	}
}


const App = () =>{


	const [ loginState, loginDispatch ] = useReducer(IsLogin, initialState)

	return (
				<isLogin.Provider value={{loginState, loginDispatch}}>
					<Router>
						<AddRoute/>
					</Router>	
				</isLogin.Provider>
	)
}

export default App;