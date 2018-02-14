import React, {Component} from 'react';

export default class Login extends Component{

    constructor(props){
        super(props);
    }
    render(){
        return(
                <form id="login-form" action="#" method="post" role="form">
                    <h2>LOGIN</h2>
                    <div className="form-group">
                        <input type="text" name="username" id="username" tabIndex="1" className="form-control" placeholder="Username" value=""/>
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" id="password" tabIndex="2" className="form-control" placeholder="Password"/>
                    </div>
                    <div className="col-xs-12">
                    <div className="col-xs-6 form-group pull-left checkbox">
                        <input id="checkbox1" type="checkbox" name="remember"/>
                        <label htmlFor="checkbox1">Remember Me</label>   
                    </div>
                    <div className="col-xs-6 form-group pull-right">     
                            <input type="submit" name="login-submit" id="login-submit" tabIndex="4" className="form-control btn btn-login" value="Log In"/>
                    </div>
                    </div>
                </form>
        );
    }
}