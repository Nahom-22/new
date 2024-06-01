import React from "react"
import '../Styles/button.css'


const Button=(props)=>{
    return(
        <React.Fragment>
          <button className={`btn ${props.className}`} onClick={props.onClick} type={props.type}>
             {props.buttonName}
          </button>
        </React.Fragment>
    )
}


export default Button