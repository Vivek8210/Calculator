

export const INCREMENT='INCREMENT';
export const DECREMENT='DECREMENT';
export const MULTIPLY='MULTIPLY';
export const DEVIDE='DEVIDE';
export const REST='REST';


export const increment=(payload)=>({
    
        type:INCREMENT,
        payload
})

export const decrement=(payload)=>({
    type:DECREMENT,
    payload
})

export const multiply=(payload)=>({
        type:MULTIPLY,
        payload
    })

    export const devide=(payload)=>({
        type:DEVIDE,
        payload
    })
export const rest=(payload)=>({
    
        type:REST,
        payload

    
})