import { ADD_TODO } from "./action";


const intialState={todos:[]};

export const todoReducer=(state=intialState,action)=>{
    switch (action.type){
        case ADD_TODO:

        return{
        todos:[...state.todos, action.payload]
        }
        default:
              return state;
    }
}