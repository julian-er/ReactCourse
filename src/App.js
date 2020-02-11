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

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.person
    const persons = [...this.state.person]
    persons.splice(personIndex, 1)
    this.setState({person:persons})

  }

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

togglePersonsHandler = () => {
  const doesShow = this.state.showPersons
  this.setState({
    showPersons: !doesShow
  })

}

  



render(){

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  let persons = null;

  if (this.state.showPersons){

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
          return (
            <div className="App">
              <header className="App-header">
                <button 
                onClick={this.togglePersonsHandler}
                style={style}
                >Show persons</button>
              </header>

            {persons}
              

            </div>
          );
        }
}

export default App;
