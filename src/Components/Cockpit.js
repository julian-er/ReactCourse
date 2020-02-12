import React from 'react'
import styled from 'styled-components';

// create StyledButton component whit styles using styled components package
const StyledButton = styled.button`
    background-color: ${ props => props.dinamic ? 'red' : 'green'};
    font: inherit;
    border: 1px solid blue;
    padding: 8px;
    cursor: pointer;
    color: white;
    
    &:hover{
      background-color: ${ props => props.dinamic ? 'salmon' : 'lightgreen'};
      color:black;
`;

const Cockpit = (props) => {
    return (<div>
    <h1>Soy una aplicación de React</h1>
    <p className={props.class.join(' ')}> ¡ y realmente funciono !</p> 
    <StyledButton 
    dinamic={props.dinamic}
    onClick={props.clicked}
    >Show persons
    </StyledButton>
    </div>
    )}
export default Cockpit