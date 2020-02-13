import React from 'react'
import Person from './Person'
import ErrorBoundary from './ErrorBoundary'


// as here I use an arrow function I will ignore the return
const Persons = (props) => props.persons.map((person, index) => {
        return <ErrorBoundary key = {person.id}>
        <Person 
        name={person.name} 
        age={person.age}
        click={ () => props.clicked (index)}
        change={(event)=> props.changed(event, person.id)}
        // isAuth={props.isAuthenticated}
        />
        </ErrorBoundary>
      });
        
    

export default Persons