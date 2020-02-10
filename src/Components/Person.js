import React from 'react'
import './Person.css'


const person = (props) => {

return <div className="Person">
           
            <p onClick={props.click}>¡Hola! soy {props.name} y {props.age}</p>
            <input type="text" onChange={props.change} value={props.name}></input>

</div>




}

export default person