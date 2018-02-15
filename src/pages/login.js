import React, {Component} from 'react';

export default class Login extends Component{

    constructor(props){
        super(props);

        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }

    handleUsername(event){

        let username = event.target.value;
        this.props.setUsername(username, false);

    }

    handlePassword(event){

        let password = event.target.value;
        this.props.setPassword(password, false);

    }

    render(){
        return(

                
                <form id="login-form" action="#" method="post" role="form">
                    <h2>LOGIN</h2>
                    <div className="form-group">
                        <input type="text" name="username" id="username" tabIndex="1" className="form-control" placeholder="Username" 
                          value={this.props.username}
                          onChange={this.handleUsername}/>
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" id="password" tabIndex="2" className="form-control" placeholder="Password"
                            value={this.props.password}
                            onChange={this.handlePassword}/>
                         <span className = {this.props.loginMsg.class}>{this.props.loginMsg.text}</span>
                    </div>
                    <div className="col-xs-12">
                    <div className="col-xs-6 form-group pull-left checkbox">
                        <input id="checkbox1" type="checkbox" name="remember"/>
                        <label htmlFor="checkbox1">Remember Me</label>   
                    </div>

                    <div className="col-xs-6 form-group pull-right">     
                            <div type="submit" name="login-submit" id="login-submit" tabIndex="4" className="form-control btn btn-login" onClick={this.props.handleLogin}>
                                Log in
                            </div>
                           
                    </div>
                    </div>
                </form>
        );
    }
}