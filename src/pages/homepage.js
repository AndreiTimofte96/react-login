import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

class Homepage extends Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            username: '',
            email: ''
        }

    }

    render(){

        return(
                <h1> Welcome to Homepage!</h1>
            
        );
    }
}
// apiData
const mapStateToProps = (state) => ({
	username: state.username,
	email: state.email,
	apiData: state.apiData   
}); //primim inputul de la redux

const mapDispatchToProps = (dispatch) =>({ //Landing will dispatch event to redux containing type and payload

});
export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
