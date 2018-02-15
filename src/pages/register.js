import React, {Component} from 'react';


export default class Register extends Component{

    constructor(props){
        super(props);

        this.state = {
            userStatus: {class: '' , text:''},
            emailStatus: {class: '' , text:''},
            passwordStatus: {class: '' , text:''},
            cPasswordStatus: {class: '' , text:''},
            cPassword: ''
        };

        this.handleUsername = this.handleUsername.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleCPassword = this.handleCPassword.bind(this);
    }

    handleUsername(event){

        let username = event.target.value;
        let userStatus = {'class': '' , 'text':''};
        let status = true;
        let ok = true;
        
        const {apiData} = this.props;
        if (username.length < 5){
            userStatus.class = 'statusRed';
            userStatus.text = 'username too short';
            status = false;
        }
        else{

            for (let index in apiData){
                if (apiData[index].user == username){
                    

                    ok = false;
                    break;
                }
            }

            if (ok === true){
                userStatus.class = 'statusGreen';
                userStatus.text = 'username is ok';
                status = true;
            }
            else{
                userStatus.class = 'statusRed';
                userStatus.text = 'username already used';
                status = false;
            }
        }

        this.setState(...this.state, {'userStatus': userStatus});
        this.props.setUsername(username, status);
        console.log(status);

    }

    checkEmail(string){

        let ok =true;
        const {apiData} = this.props;

        if (string.length === 0){
            return {class: "", text: ""};
        }

        if (string.indexOf('@') === -1 || string.indexOf('.') === -1 ){
            return {class: "statusRed", text: "Email adress incorrect"};
        }
        
        if (string[string.length-1] === '.' || string[0] === '@' || string[0] === '.'){
            return {class: "statusRed", text: "Email adress incorrect"};
        }

        for (let index in apiData){
            if (apiData[index].email === string){
                ok = false;
                break;
            }
        }

        if (ok === false){
            return {class: "statusRed", text: "Email adress already used"};
        }


        let pos = string.indexOf('@');
        for (let index = pos; index < string.length; index++){
            if (string[index] == '.')
                return {class: "statusGreen", text: "Email adress correct"};
        }

        return {class: "statusRed", text: "Email adress incorrect"};
    }

    checkPassword(string){
        
        if (string.length === 0){
            return {class: "", text: ""};
        }

        if ( (/[a-z]/.test(string)) === false ){
            return {class: "statusRed", text: "Password must have a lower letter"};
        }
        
        if ( (/[A-Z]/.test(string)) === false){
            return {class: "statusRed", text: "Password must have an upper letter"};

        } 
        if (/[0-9]/.test(string) === false){
            return {class: "statusRed", text: "Password must have a digit"};
        }
        if (string.length < 6){
            return {class: "statusRed", text: "Password is too short"};
        }
        return {class: "statusGreen", text: "Password accepted"};
    }


    handleEmail(event){

        const email = event.target.value;
        let  emailStatus = this.checkEmail(email);
        let status = true;
        if (emailStatus.class === 'statusRed') status = false;
        this.setState(...this.state, {'emailStatus': emailStatus});
        this.props.setEmail(email, status);
    }

    handlePassword(event){

        const password = event.target.value;
        let passwordStatus = this.checkPassword(password);
        let status = true;
        if (passwordStatus.class === 'statusRed') status = false;
        this.setState(...this.state, {'passwordStatus': passwordStatus});
        this.props.setPassword(password, false);
    }

    handleCPassword(event){

        const password = event.target.value;
        let cPasswordStatus;
        let status = true;
        if (password.length < this.props.password.length){
            cPasswordStatus = {class: "", text: ""};
            status = false;
        }
        else{
            if (password !== this.props.password){
               cPasswordStatus =  {class: "statusRed", text: "The password doesn't match"};
               status = false;
            }
            else{
                cPasswordStatus =  {class: "statusGreen", text: "The password match"};
                status = true;
            }
        }
        
        this.setState(...this.state, {'cPasswordStatus': cPasswordStatus, 'cPassword': password});
        this.props.setPassword(this.props.password, status);
    }


    render(){
        const {userStatus, emailStatus, passwordStatus, cPasswordStatus} = this.state;
        return(
                <form id="register-form" action="#" method="post" role="form">
                    <h2>REGISTER</h2>
                    <div className="form-group">
                        <input type="text" name="username" id="username1" tabIndex="1" className="form-control" placeholder="Username"  
                            value={this.props.username}
                            onChange={this.handleUsername}
                        />
                        <span className = {userStatus.class}>{userStatus.text}</span>   
                    </div>
                    <div className="form-group">
                        <input type="email" name="email" id="email" tabIndex="1" className="form-control" placeholder="Email Address" 
                            value={this.props.email}
                            onChange={this.handleEmail}
                        />
                        <span className = {emailStatus.class}>{emailStatus.text}</span>   
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" id="password1" tabIndex="2" className="form-control" placeholder="Password"
                            value ={this.props.password}
                            onChange={this.handlePassword}
                        />
                        <span className = {passwordStatus.class}>{passwordStatus.text}</span> 
                    </div>
                    <div className="form-group">
                        <input type="password" name="confirm-password" id="confirm-password" tabIndex="2" className="form-control" placeholder="Confirm Password"
                            value={this.state.cPassword}
                            onChange={this.handleCPassword}
                        />
                        <span className = {cPasswordStatus.class}>{cPasswordStatus.text}</span> 
                    </div>
                    <div className="form-group">
                        <div className="row">
                        <div className="col-sm-6 col-sm-offset-3">
                            <div  name="register-submit" id="register-submit" tabIndex="4" className="form-control btn btn-register" 
                            
                            onClick={this.props.handleRegister}>
                            Register Now
                            </div>
                        </div>
                        </div>
                    </div>
                </form>
        );
    }
}