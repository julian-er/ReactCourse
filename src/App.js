import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Components/Person'

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

  const style = {
    backgroundColor: 'green',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
    color: 'white'
  };

  // variable to show persons dinamic
  let persons = null;

  // conditional for show persons when state change and add some stile button
  if (this.state.showPersons){
    style.backgroundColor= 'red'

    persons = (
      <div>
          {this.state.person.map((person, index) => {
            return <Person 
            key = {person.id}
            name={person.name} 
            age={person.age}
            click={ () => this.deletePersonHandler (index)}
            change={(event)=> this.nameChangeHandler(event, person.id)}
          />
          })}
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
                <h1>Soy una aplicación de React</h1>
                <p className={classes.join(' ')}> ¡ y realmente funciono !</p> {/*  Add join ' ' because, push action make red,bold an we need to add red bold*/}
                <button 
                onClick={this.togglePersonsHandler}
                style={style}
                >Show persons</button>


            {persons}
              

            </div>
          );
        }
}

export default App;
