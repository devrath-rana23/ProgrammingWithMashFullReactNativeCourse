import { SET_USER_NAME, SET_USER_AGE } from './actions';

// default value of state
const initialState = {
    name: '',
    age: 0,
}

//Now we create a function that according to the action called, performs the operation we want to perform on the states.

function userReducer(state=initialState, action){//whenever these actions like SET_USER_NAME are called they are placed inside this function

    // Now inside the function, according to the type of action called, which we recognize using constants, we change the desired state
    switch(action.type){
        // For example, for the name, we first hold the current State object and then fill the state name with a new value that comes from the action side.
        // Finally we return state without manipulation by default.
        case SET_USER_NAME:
            return { ...state, name: action.payload };
        case SET_USER_NAME:
            return { ...state, age: action.payload };                                    
        default:
            return state;                       
    }
}

export default userReducer;