import React, {
  Component
} from 'react';
import logo from './logo.svg';
import cssClassApp from './App.css';
import Radium,{StyleRoot} from 'radium'
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
// 增加一个button设置显示或者隐藏内容

// class App extends Component {
//   state = {
//     persons: [
//       { name: "Mike", age: 28 },
//       { name: "Alice", age: 29 },
//       { name: "Fogo", age: 25, info: "@Beijing" }
//     ],
//     showPanel:true
//   }
//   switchHandler = () => {
//     this.setState({ persons: _.sampleSize(this.state.persons, this.state.persons.length) })
//   }
//   showOrder = (index) => {
//     alert("order is " + index)
//   }
//   changeName =(index,event) =>{
//     console.log(index,event.target.value)
//     this.setState({ persons: this.state.persons.map((p,i)=>{
//       if(index ===i){
//         p.name=event.target.value
//       }
//       return p
//     }) })
//   }

//   showOrHidePanel=() =>{
//     this.setState({ showPanel:!this.state.showPanel})
//   }
//   render() {
//     let renderPerson = ""
//     if(this.state.showPanel){
//        renderPerson =this.state.persons.map((item, index) => {
//         if (item.info) {
//           return (
//             <Person name={item.name} changeName={this.changeName.bind(null,index) } showOrder={this.showOrder.bind(null, index)} age={item.age}>{item.info}</Person>
//           )
//         } else {
//           return (
//             <Person name={item.name} changeName={this.changeName.bind(null, index)} showOrder={this.showOrder.bind(null, index)} age={item.age} />
//           )
//         }
//       }) 
//     }
//     return (
//       <div className="App">
//         <div>
//         <button className="switch-btn" onClick={this.switchHandler}>Switch</button>
//           <button className="switch-btn" onClick={this.showOrHidePanel}>{this.state.showPanel?"Hide":"Show"}</button>
//         </div>
//         {renderPerson}
//       </div>
//     );
//   }
// }  


// 增加删除button在子组件中并传递到父组件
// 修复warning 关于list 渲染时候key的定义(确保不会随意改变)
// 使用id来管理组件
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
    let renderPerson = ""
    if (this.state.showPanel) {
      renderPerson = this.state.persons.map((item, index) => {
        if (item.info) {
          return (
            <Person 
              name={item.name} 
              changeName={this.changeName.bind(null, item.id)} 
              showId={this.showId.bind(null, item.id)} 
              deleteCard={this.deleteCard.bind(null, item.id)}
              key={item.id}
              age={item.age}>{item.info}
              
            </Person>
          )
        } else {
          return (
            <Person 
              name={item.name} 
              changeName={this.changeName.bind(null, item.id)} 
              showId={this.showId.bind(null, item.id)} 
              deleteCard={this.deleteCard.bind(null, item.id)}
              key={item.id}
              age={item.age} />
          )
        }
      })
    }
    return (
      // 使用radium时候需要将App都包含在内
      <StyleRoot>
        <div className={cssClassApp.App}>
        <div>
            <button className={cssClassApp["switch-btn"]} onClick={this.switchHandler}>Switch</button>
            <button className={cssClassApp["switch-btn"]} onClick={this.showOrHidePanel}>{this.state.showPanel ? "Hide" : "Show"}</button>
        </div>
        {renderPerson}
      </div>
      </StyleRoot>
    );
  }
}
export default App;