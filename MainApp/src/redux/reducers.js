import { SET_TASKS, SET_TASK_ID } from './actions';

// default value of state
const initialState = {
    tasks: [],
    taskID: 1,
}

//Now we create a function that according to the action called, performs the operation we want to perform on the states.

function taskReducer(state = initialState, action) {
    switch (action.type) {
        case SET_TASKS:
            return { ...state, tasks: action.payload };
        case SET_TASK_ID:
            return { ...state, taskID: action.payload };
        default:
            return state;
    }
}

export default taskReducer;