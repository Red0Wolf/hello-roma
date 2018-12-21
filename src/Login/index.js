import {Tabs} from 'antd';
import 'antd/dist/antd.css';

import React, {Component} from 'react';
import './index.css';

import './LoginFrom';
import NormalLoginForm from "./LoginFrom";
import NormalRegisterForm from "./RegisterForm"

const TabPane = Tabs.TabPane;

class LoginPage extends Component{
	render(){
		return(
			<div className="login_form">
				<h1 className="login_form_title">Login</h1>
				<Tabs defaultActiveKey="1">
					<TabPane tab="Sign in" key="1"><NormalLoginForm/></TabPane>
					<TabPane tab="Register" key="2"><NormalRegisterForm/></TabPane>
				</Tabs>
			</div>
		);
	}
}

export default LoginPage;