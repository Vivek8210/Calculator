
import {LOAD_BUTTONS,LOAD_ANS, LOAD_CLEAR,LOAD_BACKSPACE } from "./calculator.actionTypes"

export const loadbuttons=(number)=> {
    return{
        type:LOAD_BUTTONS,
        payload:number
    }
}
export const loadans=(number)=> {
    return{
        type:LOAD_ANS,
        payload:number
    }
}
export const loadclear=(number)=> {
    return{
        type:LOAD_CLEAR,
        payload:number
    }
}
export const loadbackspace=(number)=> {
    return{
        type:LOAD_BACKSPACE,
        payload:number
    }
}