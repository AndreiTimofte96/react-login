import { SET_USERNAME_TERM, GET_API_DATA} from './actions';
import axios from 'axios';

export function setUsername(username){ // aici formam o actiune. searchTerm vine din event.target.value 
    return {type: SET_USERNAME_TERM, payload: {"username": username}};
}

export function getAPIData(apiData){
    return {type: GET_API_DATA, payload: apiData};
}

export function getAPIDetails(coord){
    return (dispatch) =>{
        axios
            .get(`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${coord.lat}&lon=${coord.lon}&cnt=7&units=metric&APPID=98c355d73f22c6eb33c4bc0bd22031fe`)
            .then(response =>{
                dispatch(getAPIData(response.data));
            });
            
    };
}
