import {FETCH_USER} from '../actions/types'

//returns null or payload(logged/user model) or false (not logged)
export default function(state = null, action) {
    console.log(action);
    switch(action.type){
        case FETCH_USER:
            return action.payload || false;
        default:
            return state;
    }
}