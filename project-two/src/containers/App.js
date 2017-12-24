import React, {
  Component
} from 'react';
import cssClassApp from './App.css';
import _ from 'lodash'
import Persons from '../components/Persons';
import Header from '../components/Header/Header';

class App extends Component {
  state = {
    persons: [
      { id:1, name: "Mike", age: 28 },
      { id: 2, name: "Alice", age: 29 },
      { id: 3, name: "Fogo", age: 25, info: "@Beijing" }
    ],
    showPanel: true
  }
  switchHandler = () => {
    this.setState({ persons: _.sampleSize(this.state.persons, this.state.persons.length) })
  }
  showId = (id) => {
    alert("id is " + id)
  }
  changeName = (id, event) => {
    // console.log(index, event.target.value)
    this.setState({
      persons: this.state.persons.map((p, i) => {
        if (id === p.id) {
          p.name = event.target.value
        }
        return p
      })
    })
  }
  deleteCard = (id) =>{
    this.setState({
      persons: this.state.persons.filter((p, i) => {
        if (p.id === id) {
          return false
        }
        return true
      })
    })    
  }
  showOrHidePanel = () => {
    this.setState({ showPanel: !this.state.showPanel })
  }
  render() {
    return (
        <div className={cssClassApp.App}>
        <Header 
          showOrHidePanel={this.showOrHidePanel}
          switchHandler={this.switchHandler}
          />
        {this.state.showPanel?(<Persons 
              persons={this.state.persons}
              showPersons = {this.state.showPanel}
              changeName={this.changeName}
              showId={this.showId}
              deleteCard={this.deleteCard}
            />):null}
      </div>
    );
  }
}
export default App;