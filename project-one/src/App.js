import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';
import _ from 'lodash'
import Person from './Person/Person.js'

// 不使用jsx的时候的代码

// class App extends Component {
//   render() {
//     return React.createElement('div', {
//       className: 'App'
//     }, React.createElement('h1', null, "hello react"))
//   }
// }


// 使用Person组件
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div><button className="switch-btn">Switch</button></div>
//         <Person name="Mike" age="28"/>
//         <Person name="Alice" age="29" />
//         <Person name="Fago">@Beijing</Person>
//       </div>
//     );
//   }
// }


// 1.处理点击事件
// 2.设置初始的initialState
// 3.调用setState来更改数据

// class App extends Component {
//   state = {
//     persons: [
//       { name: "Mike", age: 28 },
//       { name: "Alice", age: 29 },
//       { name: "Fogo", age: 25, info: "@Beijing" }
//     ]
//   }
//   switchHandler = () => {
//     this.setState({ persons: _.sampleSize(this.state.persons, this.state.persons.length) })
//   }
//   render() {
//     let render = this.state.persons.map((item, index) => {
//       if (item.info) {
//         return (
//           <Person name={item.name} age={item.age}>{item.info}</Person>
//         )
//       } else {
//         return (
//           <Person name={item.name} age={item.age} />
//         )
//       }
//     })
//     return (
//       <div className="App">
//         <div><button className="switch-btn" onClick={this.switchHandler}>Switch</button></div>
//         {render}
//       </div>
//     );
//   }
// }


// 使用bind来实现参数的绑定

// class App extends Component {
//   state = {
//     persons: [
//       { name: "Mike", age: 28 },
//       { name: "Alice", age: 29 },
//       { name: "Fogo", age: 25, info:"@Beijing"}
//     ]
//   }
//   switchHandler = () =>{
//     this.setState({ persons: _.sampleSize(this.state.persons,this.state.persons.length)})
//   }
//   showOrder = (index) =>{
//     alert("order is "+index)
//   }
//   render() {
//     let render = this.state.persons.map((item,index) => {
//       if(item.info){
//         return (
//           <Person name={item.name} showOrder={this.showOrder.bind(null, index)} age={item.age}>{item.info}</Person>
//         )
//       }else{
//         return(
//           <Person name={item.name} showOrder={this.showOrder.bind(null, index)} age={item.age}/>
//         )
//       }
//     })
//     return (
//       <div className="App">
//         <div><button className="switch-btn" onClick={this.switchHandler}>Switch</button></div>
//         {render}
//       </div>
//     );
//   }
// }


// 修改子组件中名称的变更

class App extends Component {
  state = {
    persons: [
      { name: "Mike", age: 28 },
      { name: "Alice", age: 29 },
      { name: "Fogo", age: 25, info: "@Beijing" }
    ]
  }
  switchHandler = () => {
    this.setState({ persons: _.sampleSize(this.state.persons, this.state.persons.length) })
  }
  showOrder = (index) => {
    alert("order is " + index)
  }
  changeName =(index,event) =>{
    console.log(index,event.target.value)
    this.setState({ persons: this.state.persons.map((p,i)=>{
      if(index ===i){
        p.name=event.target.value
      }
      return p
    }) })
  }
  render() {
    let render = this.state.persons.map((item, index) => {
      if (item.info) {
        return (
          <Person name={item.name} changeName={this.changeName.bind(null,index) } showOrder={this.showOrder.bind(null, index)} age={item.age}>{item.info}</Person>
        )
      } else {
        return (
          <Person name={item.name} changeName={this.changeName.bind(null, index)} showOrder={this.showOrder.bind(null, index)} age={item.age} />
        )
      }
    })
    return (
      <div className="App">
        <div><button className="switch-btn" onClick={this.switchHandler}>Switch</button></div>
        {render}
      </div>
    );
  }
}
export default App;