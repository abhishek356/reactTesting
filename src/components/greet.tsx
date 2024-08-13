import React from "react"

type GreetProps = {
    name?:String
}

let Greet =  (props:GreetProps)=>{

    return (<><h2>Hello {props.name}</h2></>)
}

export default Greet