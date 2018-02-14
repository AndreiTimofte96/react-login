import { SET_USERNAME_TERM, GET_API_DATA } from "../actions/actions";

const DEFAULT_STATE = { 
    username: ''
};

const setUsername = (state, action) =>{
    return Object.assign({}, state,{'username': action.payload.username});
};

const apiData = (state , action) =>{
    return Object.assign({}, state, {apiData : action.payload});
};

const rootReducer = (state = DEFAULT_STATE, action) =>{
    switch(action.type){
        
        case SET_USERNAME_TERM:
            return setUsername(state, action);

        case GET_API_DATA: //stiu deja ca am o valoare in payload deja incarcata
            return apiData(state, action);

        default:
            return state;
    }
};

export default rootReducer;