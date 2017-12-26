import React, {
  Component
} from 'react';
import cssClassApp from './App.css';
import _ from 'lodash'
import Persons from '../components/Persons';
import Header from '../components/Header/Header';
import WithClass from '../HOC/WithClass';
class App extends Component {
  state = {
    persons: [
      { id:1, name: "Mike", age: "0" },
      { id: 2, name: "Alice", age: 29 },
      { id: 3, name: "Fogo", age: 25, info: "@Beijing" }
    ],
    showPanel: true,
    clickedCount:0
  }
  switchHandler = () => {
    let temp = [...this.state.persons];
    this.setState({ persons: _.sampleSize(temp, temp.length) })
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
    this.setState((prevState,props)=>{
      return{
        showPanel: !this.state.showPanel,
        // 如果在其他地方也更新的该方法，请使用函数中的prevState来改变值
        clickedCount:prevState.clickedCount+1
      }
    })
  }
  render() {
    return (
        <div>
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
export default WithClass(App, cssClassApp.App);