import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadans, loadbackspace, loadbuttons, loadclear } from "../calculatorRedux/calculator.action";
import { CALCULATOR_KEY } from "../calculatorRedux/calculator.reducer";



export const CalculatorApp=()=>{
    const dispatch=useDispatch()

    const viewResult=useSelector((state)=>{
  return state[CALCULATOR_KEY]
    })
    return(
        <>
        <div className="cal">Calculator App</div>
        <section>
            <div className="calculator">
                <div><input className="calculatorinput" type="text" placeholder="0" value={(viewResult.ans).length===0 ? viewResult.number: viewResult.ans} /></div>
                <div>
           <button onClick={()=> dispatch(loadclear())}>Ac</button>
           <button onClick={()=> dispatch(loadbackspace())}>C</button>
           <button onClick={()=> dispatch(loadbuttons('/'))}>/</button>
           <button onClick={()=> dispatch(loadbuttons('+'))} className="plusbutton">+</button>
                </div>
                <div>
            <button onClick={()=> dispatch(loadbuttons(9))}>9</button>
           <button onClick={()=> dispatch(loadbuttons(8))}>8</button>
           <button onClick={()=> dispatch(loadbuttons(7))}>7</button>
           <button onClick={()=> dispatch(loadbuttons('-'))}>-</button>  
                </div>
                <div>
            <button onClick={()=> dispatch(loadbuttons(4))}>4</button>
           <button onClick={()=> dispatch(loadbuttons(5))}>5</button>
           <button onClick={()=> dispatch(loadbuttons(6))}>6</button>
           <button onClick={()=> dispatch(loadbuttons('*'))}>*</button>  
                </div>
                <div>
            <button onClick={()=> dispatch(loadbuttons(1))}>1</button>
           <button onClick={()=> dispatch(loadbuttons(2))}>2</button>
           <button onClick={()=> dispatch(loadbuttons(3))}>3</button>
           <button onClick={()=> dispatch(loadbuttons(0))}>0</button>  
                </div>
                <div>
                    <button onClick={()=> dispatch(loadbuttons('.'))} className="point">.</button>
                    <button onClick={()=> dispatch(loadans(Number))} className="equalto">=</button>
                </div>
            </div>
        </section>
        </>
    )
}