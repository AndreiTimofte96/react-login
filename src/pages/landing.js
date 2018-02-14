import React, { Component } from 'react';
import Login from './login';
import Register from './register';

export default class Landing extends Component {

    constructor(props){
        super(props);
        this.state = {
            isLogin: true,
            isRegister: false
        }

				this.loginClick = this.loginClick.bind(this);
				this.registerClick = this.registerClick.bind(this);
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

    render(){
			return (
				
				<div>
					<div className="container">
						<div className="row">
							 <div className="col-md-6 col-md-offset-3">
							   <div className="panel panel-login">
								 <div className="panel-body">
								   <div className="row">
									 <div className="col-lg-12">
	
													   {this.state.isLogin ? <Login/> : <Register/>}
	
													   <div className="panel-heading">
													<div className="row">
													<div className="col-xs-6 tabs">
													<div className="active" id="login-form-link" onClick={this.loginClick}>
																				<div className="login">LOGIN</div>
																			</div>
													</div>
													<div className="col-xs-6 tabs">
													<div id="register-form-link" onClick={this.registerClick}>
																				<div className="register">REGISTER</div>
																			</div>
													</div>
												</div>
												</div>
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
