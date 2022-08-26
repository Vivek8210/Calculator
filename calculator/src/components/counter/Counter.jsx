

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement ,multiply,rest, devide} from '../../redux/counter/action';

const Counter = () => {
    const count=useSelector((state)=>state.count.count);
    const dispatch=useDispatch()
  return (
     <div>
         
     <h2>count;{count}</h2>
        <div> <button onClick={()=> dispatch(increment(1))}>inc by 1</button></div>
        
        
         <div><button onClick={()=> dispatch(decrement(1))}>dec by 1</button></div>
        <div> <button onClick={()=> dispatch(multiply(2))}>multiply</button></div>
        <div> <button onClick={()=> dispatch(devide(2))}>devide</button></div>
         <div><button onClick={()=> dispatch(rest())}>Reset</button></div>
    </div>
    
  )
}

export default Counter