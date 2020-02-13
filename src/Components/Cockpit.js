import React from 'react';
import styled from 'styled-components';
import PropType from 'prop-types'



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

      //variable to change css dinamic
    const classes = [];



      //conditional for change the css class dinamic

    if (props.person.length <= 2){
        classes.push('red');
    } 
    if (props.person.length <= 1){
        classes.push('bold')
    }


    return (<div>
    <h1>Soy una aplicación de React</h1>
    <p className={classes.join(' ')}> ¡ y realmente funciono !</p> 
    <StyledButton 
    dinamic={props.dinamic}
    onClick={props.clicked}
    >Show persons
    </StyledButton>
    </div>
    )}

  Cockpit.propType={
    dinamic: PropType.func,
    onClick: PropType.func,
    person: PropType.object
  }

export default Cockpit