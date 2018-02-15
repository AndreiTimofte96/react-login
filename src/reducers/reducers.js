import { SET_USERNAME_TERM, SET_EMAIL_TERM, SET_PASSWORD_TERM, GET_API_DATA } from "../actions/actions";

const DEFAULT_STATE = { 
    username: '',
    userStatus: '',
    email: '',
    emailStatus: '',
    password: '',
    passwordStatus:'',
    apiData: ''
};

const setUsername = (state, action) =>{
    return Object.assign({}, state,{'username': action.payload.username, 'userStatus': action.payload.userStatus});
};

const setEmail = (state, action) =>{
    return Object.assign({}, state,{'email': action.payload.email, 'emailStatus': action.payload.emailStatus});
};

const setPassword = (state, action) =>{
    return Object.assign({}, state,{'password': action.payload.password, 'passwordStatus': action.payload.passwordStatus});
};

const apiData = (state , action) =>{
    return Object.assign({}, state, {apiData : action.payload});
};

const rootReducer = (state = DEFAULT_STATE, action) =>{
    switch(action.type){
        
        case SET_USERNAME_TERM:
            return setUsername(state, action);

        case SET_EMAIL_TERM:
            return setEmail(state, action);

        case SET_PASSWORD_TERM:
            return setPassword(state, action);

        case GET_API_DATA: //stiu deja ca am o valoare in payload deja incarcata
            return apiData(state, action);

        default:
            return state;
    }
};

export default rootReducer;