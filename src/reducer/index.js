import { AGE_UP, AGE_DOWN } from "../actions";


const initialState = {
    age: 20
};

/**
 * 
 * @param {*} state 
 * @param {*} action 
 * It's responsible to take the action and map it to right action and return new state
 */

export default function rootReducer(state = initialState, action) {
    
    const newState = { ...state }; //cloning object into new object using spread operator

    switch(action.type) {
        case AGE_UP:
            newState.age += action.value;
            //I will not call any API calls in reducer
            break;
        
        case AGE_DOWN:
            newState.age -= action.value;
            break;
    }

    return newState;
}