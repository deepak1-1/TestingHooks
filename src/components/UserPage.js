import React, {useState, useContext, useEffect} from 'react';
import { isLogin } from '../store/Context';


function UserPage(){

	const {loginState, loginDispatch} = useContext(isLogin);

	function checkLogin(){
		console.log(loginState.login_);
		loginDispatch({type: "User"})
	}

	useEffect( ()=>{
		console.log('INSIDE USER_PAGE: ', loginState.login_)
	})

	return (

			<>
				<button onClick={checkLogin}>
					click me
				</button>
			</>
		)
}


export default UserPage;