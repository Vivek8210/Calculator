import { INCREMENT,DECREMENT, REST, MULTIPLY, DEVIDE } from "./action"

const intialState={count:0}
export const CounterReducer=(state=intialState,action)=>{
 switch(action.type){
     case INCREMENT:
    return {
      count:  state.count + action.payload
    }
      case DECREMENT:
    return {
      count:  state.count - action.payload
    }
    case MULTIPLY:
      return {
        count:  state.count * action.payload
      }
      case DEVIDE:
        return {
          count:  state.count / action.payload
        }
     
    case REST:
        return {
          ...intialState
        }
    default: 
        return state
 };
 
}   
 
