import {SET_STYLE} from "../actions/styleSetter";

const initialState = {
    style: null
};

export function styleReducer(state = initialState, action) {
    if(action.type === SET_STYLE){
        return {...state, style: action.styleForSet}
    }
    return state
}