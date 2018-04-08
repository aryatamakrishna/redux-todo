import { combineReducers } from 'redux';

const taskReducers = (state=[], action) => {
    switch(action.type){
        case 'ADD_TASK':
            state = state.concat(action.payload);
            break;
        case 'DELETE_TASK':
            state = state.slice();
            state.splice(action.payload, 1);
            break;
        default : 
            break;
    }

    return state;
}

const reducers = combineReducers({
    task: taskReducers
})

export default reducers;