import { SET_USERNAME_TERM,SET_EMAIL_TERM, SET_PASSWORD_TERM, GET_API_DATA} from './actions';
import axios from 'axios';

export function setUsername(username, status){ // aici formam o actiune. searchTerm vine din event.target.value 
    return {type: SET_USERNAME_TERM, payload: {"username": username, "userStatus": status}};
}

export function setEmail(email, status){ // aici formam o actiune. searchTerm vine din event.target.value 
    return {type: SET_EMAIL_TERM, payload: {"email": email, "emailStatus": status}};
}

export function setPassword(password, status){ // aici formam o actiune. searchTerm vine din event.target.value 
    return {type: SET_PASSWORD_TERM, payload: {"password": password, "passwordStatus": status}};
}


export function getAPIData(apiData){
    return {type: GET_API_DATA, payload: apiData};
}

export function getAPIDetails(){
    return (dispatch) =>{
        
            let data = JSON.parse(localStorage.getItem('USERS'));
            dispatch(getAPIData(data));
    };
}



export function postAPIRegister(obj, apiData){
    
    let data = [];
    if (apiData){
        data = apiData;   
    }
    
    data.push(obj);
    console.log(data);
    localStorage.setItem('USERS', JSON.stringify(data));
};
