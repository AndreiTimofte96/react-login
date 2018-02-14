import React, {Component} from 'react';
import { connect } from 'react-redux';
import { setUsername, getAPIDetails } from '../actions/actionCreators';

class Register extends Component{

    constructor(props){
        super(props);

        this.setUsername = this.setUsername.bind(this);
    }

    setUsername(event){

        this.props.handleUsernameChange(event.target.value);
    }

    render(){

        console.log(this.props.username);
        return(
                <form id="register-form" action="#" method="post" role="form">
                    <h2>REGISTER</h2>
                    <div className="form-group">
                        <input type="text" name="username" id="username1" tabIndex="1" className="form-control" placeholder="Username"  
                            value={this.props.username}
                            onChange={this.setUsername}
                        />
                    </div>
                    <div className="form-group">
                        <input type="email" name="email" id="email" tabIndex="1" className="form-control" placeholder="Email Address" value=""/>
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" id="password1" tabIndex="2" className="form-control" placeholder="Password"/>
                    </div>
                    <div className="form-group">
                        <input type="password" name="confirm-password" id="confirm-password" tabIndex="2" className="form-control" placeholder="Confirm Password"/>
                    </div>
                    <div className="form-group">
                        <div className="row">
                        <div className="col-sm-6 col-sm-offset-3">
                            <input type="submit" name="register-submit" id="register-submit" tabIndex="4" className="form-control btn btn-register" value="Register Now"/>
                        </div>
                        </div>
                    </div>
                </form>
        );
    }
}

const mapStateToProps = (state) => ({
    username: state.username,
    
}); //primim inputul de la redux

const mapDispatchToProps = (dispatch) =>({ //Landing will dispatch event to redux containing type and payload

    handleUsernameChange(username){
        dispatch(setUsername(username));
    },
    getAPIData(coord){
        dispatch(getAPIDetails(coord));
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(Register);
