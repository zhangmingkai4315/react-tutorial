import React, { Component } from 'react'
import Radium from 'radium'
import './Person.css'

// 1. 使用props来接收数据 

// class Person extends Component {
//   render () {
//     return (
//       <div className="person">
//         <h2>Name: {this.props.name}</h2>
//         <p>Age: {this.props.age}</p>
//         <small>Random: {Math.floor(Math.random() * 30)}</small>
//       </div>
//     )
//   }
// }

// 1. 传递onClick事件到顶层

// const Person = (props) =>{
//       return (
//       <div className="person">
//         <h2>Name: {props.name}{props.children}</h2>
//         <p>Age: {props.age}</p>
//         <small>Random: {Math.floor(Math.random()*30)}</small>
//         <div><button onClick={props.showOrder}>show order</button></div>
//       </div>
//     )
// }

// 1. 使用Person.css集成css文件
// 2. 传递onChange事件到顶层

// const Person = (props) => {
//   return (
//     <div className="person">
//       <h2>Name: {props.name}{props.children}</h2>
//       <p>Age: {props.age}</p>
//       <small>Random: {Math.floor(Math.random() * 30)}</small>
//       <div><button onClick={props.showOrder}>show order</button></div>
//       <input type="text" onChange={props.changeName} value={props.name}/>
//     </div>
//   )
// }

// 1.如何使用inline-style

// const Person = (props) => {
//   const style={
//     backgroundColor:"orange",
//     margin:"10px 5px",
//     padding:"10px 5px",
//     display:"inline-block",
//     width:"400px"
//   }
//   return (
//     <div style={style}>
//       <h2>Name: {props.name}{props.children}</h2>
//       <p>Age: {props.age}</p>
//       <small>Random: {Math.floor(Math.random() * 30)}</small>
//       <div>
//         <button onClick={props.showOrder}>show order</button>
//       </div>
//       <input type="text" onChange={props.changeName} value={props.name}/>
//     </div>
//   )
// }


// // 1.增加删除按钮
// // 2.使用id来管理内容
// const Person = (props) => {
//   return (
//     <div className="person">
//       <h2>Name: {props.name}{props.children}</h2>
//       <p>Age: {props.age}</p>
//       <small>Random: {Math.floor(Math.random() * 30)}</small>
//       <div>
//         <button className="btn"onClick={props.showId}>show id</button>
//         <button className="btn delete-btn" onClick={props.deleteCard}>delete</button>
//       </div>
//       <input type="text" onChange={props.changeName} value={props.name} />
//     </div>
//   )
// }





// 1.使用radium管理inline style
// 请查看每次随机数都会变化，说明进行了重新的rerender!
const Person = (props) => {
  let personStyle = {
    "border":"1px solid wheat",
    "backgroundColor":"orange",
    "margin":"10px 5px",
    "padding":"10px 5px",
    "display":"inline-block",
    "width":"300px",
    ":hover":{
      backgroundColor:"wheat"
    },
    "@media (min-width: 1000px)":{
      "width": "450px",
    }
  }
  return (
    <div style={personStyle}>
      <h2>Name: {props.name}{props.children}</h2>
      <p>Age: {props.age}</p>
      <small>Random: {Math.floor(Math.random() * 30)}</small>
      <div>
        <button className="btn" onClick={props.showId}>show id</button>
        <button className="btn delete-btn" onClick={props.deleteCard}>delete</button>
      </div>
      <input type="text" onChange={props.changeName} value={props.name} />
    </div>
  )
}
export default Radium(Person)