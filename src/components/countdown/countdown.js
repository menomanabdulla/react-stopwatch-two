import React,{Component} from 'react'
import Digit from './digit/digit'
const CountDown = (props)=>{
    return(
        <div>
            <Digit value= {props.time.min}/>
            <Digit value= {props.time.sec}/>
            <Digit value= {props.time.mili}/>
        </div>
    )
} 

export default CountDown