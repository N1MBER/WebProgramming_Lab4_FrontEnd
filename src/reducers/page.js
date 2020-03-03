import {
    CANVAS_WIDTH,
    DEVICE_TYPE,
    SET_R,
    PAGE_WIDTH,
    CANVAS_COF,
    SET_TABLE,
    SET_MESSAGE_R,
    SET_MESSAGE_X,
    SET_MESSAGE_Y,
    ADD_DOT,
    CLOCK_SIZE,
    SET_X,
    SET_Y,
    MARGIN_LEFT,
    MARGIN_TOP
} from "../actions/pageActions";

const  initialState = {
    x: null,
    y: null,
    r:5,
    cof: 0.5,
    table: [
    ],
    mL: 10,
    mT:10,
    messageX: "",
    messageY: "",
    messageR: "",
    pageWidth: 1440,
    canvasWidth: 0,
    clockSiz3: 600,
    deviceType: null
}

export function pageReducer(state  = initialState,action) {
    switch (action.type) {
        case  MARGIN_LEFT:
            return{...state,mL: action.payload};
        case  MARGIN_TOP:
            return{...state,mT: action.payload};
        case CANVAS_COF:
            return{...state,cof: action.payload};
        case CLOCK_SIZE:
            return{...state,clockSiz3: action.payload};
        case ADD_DOT:
            return {...state, table: [...state.table, action.payload]};
        case SET_MESSAGE_Y:
            return{...state,messageY: action.payload};
        case SET_TABLE:
            return {...state,table: action.payload};
        case PAGE_WIDTH:
            return{...state,pageWidth: action.payload};
        case SET_MESSAGE_R:
            return{...state,messageR: action.payload};
        case SET_MESSAGE_X:
            return{...state,messageX: action.payload};
        case DEVICE_TYPE:
            return{...state,deviceType: action.payload};
        case CANVAS_WIDTH:
            return {...state,canvasWidth: action.payload};
        case SET_X:
            return {...state,x: action.payload};
        case SET_Y:
            return {...state,y: action.payload};
        case SET_R:
            return {...state,r: action.payload};
    }
    return state;
}