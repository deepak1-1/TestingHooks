import React, {useState, useEffect, useContext, useRef} from 'react';
import { isLogin } from '../store/Context';


function Login(props){

	const {loginState, loginDispatch} = useContext(isLogin);
	const nameInput = useRef(null);

	function doLogin(){

		console.log(loginState.login_);
		loginDispatch({type: 'Admin'});
		console.log(nameInput.current.value)
		nameInput.current.value = "Hello I am changed!";
		nameInput.current.value = null;

	}

	useEffect(()=>{
		console.log("Inside Effect: ", loginState.login_)
	})

	return (
		<>
			<input width="200px" ref={nameInput} placeholder="Enter your good name!"/>
			<button onClick={doLogin}>Login</button>
		</>
	)
}


export default Login;