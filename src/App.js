import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Components/Person'

class App extends Component {

  state = {
    person: [
        {
          name:"Componente",
          age:"tengo 1 dia de creado"
        },
        {
          name:"Componentesito",
          age:"tengo 1 ratin"
        },
        {
          name:"Componente mayor",
          age:"tengo 1 mes de creado"
        }
    ]
    
  }

  switchPersonHandler = (name) =>{

      this.setState({
        person: [
          {
            name:name,
            age:"tengo 1 dia de creado"
          },
          {
            name:"Componentesito",
            age:"tengo 1 ratin"
          },
          {
            name:"Componente mayor",
            age:"tengo 1 mes de creado"
          }
      ]
      })
  
  }

  nameChangeHandler = (event) =>{

    this.setState({
      person: [
        {
          name:event.target.value,
          age:"tengo 1 dia de creado"
        },
        {
          name:"Componentesito",
          age:"tengo 1 ratin"
        },
        {
          name:"Componente mayor",
          age:"tengo 1 mes de creado"
        }
    ]
    })

}

  



render(){

          return (
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                {this.handleCreatePerson} <button onClick={this.switchPersonHandler.bind(this, 'pepe grillo')}>Switch Name</button>
              </header>
              <Person 
                name={this.state.person[0].name} 
                age={this.state.person[0].age}
                click={()=> this.switchPersonHandler('juan')}
                change = {this.nameChangeHandler}
              />
              <Person 
                name={this.state.person[1].name} 
                age={this.state.person[1].age}
              />
              <Person 
                name={this.state.person[2].name} 
                age={this.state.person[2].age}
              />
            </div>
          );
        }
}

export default App;
