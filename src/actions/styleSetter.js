export const SET_STYLE = 'SET_STYLE';

export function setStyle(style) {
    return{
        type: SET_STYLE,
        styleForSet: style
    }
}