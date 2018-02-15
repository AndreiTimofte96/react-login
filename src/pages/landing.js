import React, { Component } from 'react';
import Login from './login';
import Register from './register';
import { connect } from 'react-redux';
import { setUsername, setEmail, setPassword, getAPIDetails, postAPIRegister } from '../actions/actionCreators';
import {  Link } from "react-router-dom";
import { browserHistory } from 'react-router'
import { withRouter } from 'react-router-dom'
import Homepage from './homepage'



class Landing extends Component {

    constructor(props){
		super(props);
		console.log(props);
        this.state = {
			isLogin: true,
			loginSuccesful: ""
		};

		this.loginClick = this.loginClick.bind(this);
		this.registerClick = this.registerClick.bind(this);
		this.handleRegister = this.handleRegister.bind(this);

		/*let obj = [];
		localStorage.setItem('USERS', JSON.stringify(obj));*/
		//localStorage.clear();
		this.props.getAPIData();
	}
		
	loginClick(){
		if (this.state.isLogin === false){
			this.setState(...this.state, {isLogin: true});
		}
	}

	registerClick(){
		if (this.state.isLogin === true){
			this.setState(...this.state, {isLogin: false});
		}
	}
	

	setUsername(username, status){
		this.props.handleUsernameChange(username, status);
	}
	setEmail(email, status){
		this.props.handleEmailChange(email, status);
	}
	setPassword(password, status){
		this.props.handlePasswordChange(password, status);
	}
	handleRegister(){
		const {userStatus, emailStatus, passwordStatus} = this.props;
		console.log(userStatus, emailStatus, passwordStatus);
		
		if (userStatus === true && emailStatus === true && passwordStatus === true){
			let obj = {'user': this.props.username,  'password' : this.props.password, 'email': this.props.email};
			this.props.postAPIData(obj, this.props.apiData);
			console.log("POST");
			this.setState(...this.state, {isLogin:true});

		}
		else{
			console.log("NOT POST");
		}
	}

	handleLogin(){
	
		let ok = false;
		for (let i=0;i<this.props.apiData.length;i++){
			if(this.props.username==this.props.apiData[i].user&&this.props.password==this.props.apiData[i].password){
				ok = true;
			}
		}

		if (ok === true){
			console.log("LOGIN OK");
			this.setState(...this.state, {loginSuccesful: true});
			this.props.history.push('/homepage');
		}
		else{
			console.log("LOGIN BAD");
			this.setState(...this.state, {loginSuccesful: false});
		}
	}
    render(){
		const {isLogin} = this.state;
			if (this.state.loginSuccesful === true){
				return(
					<Homepage />
				)
			}
			else{
				return (
					<div>
						<div className="container">
							<div className="row">
								<div className="col-md-6 col-md-offset-3">
									<div className="panel panel-login">
									<div className="panel-heading">
														<div className="row">
															<div className="col-xs-6 tabs">
																<div className="" id="login-form-link" onClick={this.loginClick}>
																	<div className={`landing-tab login ${isLogin === true ? 'active': ''}`}>LOGIN</div>
																</div>
															</div>
															<div className="col-xs-6 tabs">
																<div id="register-form-link" onClick={this.registerClick}>
																	<div className={`landing-tab register ${isLogin === false ? 'active': ''}`}>REGISTER</div>
																</div>
															</div>
														</div>
													</div>
										<div className="panel-body">
										
											<div className="row">
												<div className="col-lg-12">
													{
														isLogin === true ? 
														<Login 
															username={this.props.username}
															password={this.props.password}
															setUsername={(username, status) =>{this.setUsername(username, status);}}
															setPassword={(password, status) =>{this.setPassword(password, status);}}
															handleLogin={() =>{this.handleLogin();}} 
															loginMsg = {
																this.state.loginSuccesful === false?
																 {class: "statusRed", text: "Wrong Credentials"}
																 :
																 {class: "", text: ""}
															}
														/> 
													: 
														<Register 
															apiData={this.props.apiData}
															username={this.props.username}
															email={this.props.email}
															password={this.props.password}
															setUsername={(username, status) =>{this.setUsername(username, status);}}
															setEmail={(email, status) =>{this.setEmail(email, status);}}
															setPassword={(password, status) =>{this.setPassword(password, status);}}
															handleRegister={() =>{this.handleRegister();}} 
														/>
													}
													
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				);
			}
    }
}

const mapStateToProps = (state) => ({
	username: state.username,
	userStatus: state.userStatus,
	email: state.email,
	emailStatus: state.emailStatus,
	password: state.password,
	passwordStatus: state.passwordStatus,
	apiData: state.apiData
    
}); //primim inputul de la redux

const mapDispatchToProps = (dispatch) =>({ //Landing will dispatch event to redux containing type and payload

    handleUsernameChange(username, status){
        dispatch(setUsername(username, status));
	},
	handleEmailChange(email, status){
        dispatch(setEmail(email, status));
	},
	handlePasswordChange(password, status){
        dispatch(setPassword(password, status));
	},
    getAPIData(){
        dispatch(getAPIDetails());
	},
	postAPIData(obj, apiData){
		postAPIRegister(obj, apiData);
	}
});
export default connect(mapStateToProps, mapDispatchToProps)(Landing);