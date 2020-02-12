import React, { Component } from 'react';
import './App.css';
// import Person from './Components/Person';
import styled from 'styled-components';
// import ErrorBoundary from './Components/ErrorBoundary'
import Persons from './Components/Persons'
import Cockpit from './Components/Cockpit'

class App extends Component {

  state = {
    person: [
        {
          name:"Componente",
          age:"tengo 1 dia de creado",
          id:"jdklsa"
        },
        {
          name:"Componentesito",
          age:"tengo 1 ratin",
          id:"jdklsa2"
        },
        {
          name:"Componente mayor",
          age:"tengo 1 mes de creado",
          id:"jdklsa3"
        }
    ],
    otherState :' something ',
    showPersons: false

    
  }
 // funtion to delete "card" of person when i clicked
  deletePersonHandler = (personIndex) => {
    //const persons = this.state.person
    const persons = [...this.state.person]
    persons.splice(personIndex, 1)
    this.setState({person:persons})

  }
//function to change name when you change the input
  nameChangeHandler = (event, id) =>{
    const personIndex = this.state.person.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.person[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.person];

    persons[personIndex] = person;

    this.setState({
      person: persons
    })

}

// function to change state for show list of persons
togglePersonsHandler = () => {
  const doesShow = this.state.showPersons
  this.setState({
    showPersons: !doesShow
  })

}

  



render(){



  // variable to show persons dinamic
  let persons = null;

  // conditional for show persons when state change and add some stile button
  if (this.state.showPersons){
    

    persons = (
      <div>
        <Persons persons={this.state.person} 
        clicked = {this.deletePersonHandler} 
        changed={this.nameChangeHandler}
        />
      </div> 
    );

  }

  //variable to change css dinamic
  const classes = [];

  //conditional for change the css class dinamic

  if (this.state.person.length <= 2){
    classes.push('red');
  } 
  if (this.state.person.length <= 1){
    classes.push('bold')
  }


          return (
            <div className="App">
                <Cockpit  
                dinamic={this.state.showPersons}
                clicked={this.togglePersonsHandler}
                class={classes}/>
                {persons}
            </div>
          );
        }
}

export default App;
