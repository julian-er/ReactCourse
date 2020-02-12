import React from 'react';
import styled from 'styled-components';

//import './Person.css';
const StyledDiv =  styled.div`
width: 60%;
margin: 16px auto;
border: 1px solid #eee;
box-shadow: 0 2px 3px #ccc;
padding: 16px;
text-align: center;

@media (min-width: 500px){
width: 450px;
}`


const person = (props) => {

// const Style = {
//     '@media (min-width: 500px':{
//         width: '450px'
//     }
// }

return <StyledDiv >
            <p onClick={props.click}>¡Hola! soy {props.name} y {props.age}</p>
            <input type="text" onChange={props.change} value={props.name}></input>

            </StyledDiv>




}

export default person