import React,{Component} from 'react'
import './digit.css'
const Digit = (props)=>{
    return(
        <div className="digit-block">
            <h1>{(props.value)<10? `0${props.value}`: props.value}</h1>
        </div>
    )
} 

export default Digit