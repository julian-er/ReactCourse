import React, {useContext} from 'react';
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


// if i use a class component i can use " static contexType = AuthContext " to set context in 
// this component. This context can be accesible whit keyword this => then this.context now is valid
// and i don't need to wrap mi JSX whit <SomeContext.Consumer> because all component is a consumer
// i use that only when i write {this.context.authenticated} for example


// now i'm using useContext hook and i'ts easier


const Person = (props) => {

    const authContext = useContext(AuthContext);


return <StyledDiv >
            {authContext.authenticated?<h1>AUTHENTICATED</h1>:<h1>PLEASE LOG IN</h1> }
            <p onClick={props.click}>¡Hola! soy {props.name} y {props.age}</p>
            <input type="text" onChange={props.change} value={props.name}></input>
        </StyledDiv>
}

Person.propTypes = {
    click : PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.string,
    change: PropTypes.func
};

export default Person