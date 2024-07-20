import React from 'react'

export default function Alert(props) {
    const Capitalize =()=>{
        return props.alert.type.charAt(0).toUpperCase() + props.alert.type.slice(1);
    }
  return (
    <div className='container'style={{height:"50px"}}>
    {props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
       <strong>{Capitalize()}</strong>: {props.alert.message}
    </div>}
    </div>
  )
}
