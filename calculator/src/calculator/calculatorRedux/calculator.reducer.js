
import {LOAD_BUTTONS,LOAD_ANS, LOAD_CLEAR,LOAD_BACKSPACE } from "./calculator.actionTypes"
export const CALCULATOR_KEY="calculatorStore"
let intialState={
    number:'',
    ans:''
}

export const calculatorReducer=(state=intialState, action)=> {
    let {type,payload}=action

    switch(type){
        case LOAD_BUTTONS:
        return{
            ...state,
            ...payload,
            number:state.number.concat(action.payload)
        }
       case LOAD_ANS:
          try {
              return{
                  ...state,
                  ...payload,
                  ans:eval(state.number).toString()
              }
          } catch (error) {
              return{
                  ...state,
                  ...payload,
                  ans:'error'
              }
          }

          case LOAD_CLEAR:
            return{
                ...state,
                ...payload,
                number:'',
                ans:''
            }

            case LOAD_BACKSPACE:
                return{
                    ...state,
                    ...payload,
                    number:(state.number).slice(0,-1),
                    ans:''
                }
                default :return state
    }
}