import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AuthContext from '../Context/auth-context'

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


return <StyledDiv >
            <AuthContext.Consumer>
                {(context)=>
                context.authenticated?<h1>AUTHENTICATED</h1>:<h1>PLEASE LOG IN</h1> }
            </AuthContext.Consumer>
            {}
            <p onClick={props.click}>¡Hola! soy {props.name} y {props.age}</p>
            <input type="text" onChange={props.change} value={props.name}></input>

        </StyledDiv>
}

person.propTypes = {
    click : PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.string,
    change: PropTypes.func
};

export default person