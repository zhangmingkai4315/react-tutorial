import React,{Component} from 'react'
import PropTypes from 'prop-types'
import cssClasses from './Person.css'

// const Person = (props) => {
//   return (
//     <div className={cssClasses["person"]}>
//       <h2>Name: {props.name}{props.children}</h2>
//       <p>Age: {props.age}</p>
//       <small>Random: {Math.floor(Math.random() * 30)}</small>
//       <div>
//         <button className={cssClasses["btn"]} onClick={props.showId}>show id</button>
//       <button className={cssClasses["btn"] + " " + cssClasses["delete-btn"]}  onClick={props.deleteCard}>delete</button>
//       </div>
//       <input type="text" onChange={props.changeName} value={props.name} />
//     </div>
//   )
// }


class Person extends Component{
  constructor(props){
    super(props)
    console.log("person constructor")
  }
  componentWillMount() {
    console.log("person componentWillMount")
  }
  componentDidMount() {
    console.log("person componentDidMount")
    this.inputElement.focus()
    console.log(this.inputElement)
  }  
  render(){
    console.log("person render")
    return (
        <div className={cssClasses["person"]}>
          <h2>Name: {this.props.name}{this.props.children}</h2>
          <p>Age: {this.props.age}</p>
          <small>Random: {Math.floor(Math.random() * 30)}</small>
          <div>
            <button className={cssClasses["btn"]} onClick={this.props.showId}>show id</button>
          <button className={cssClasses["btn"] + " " + cssClasses["delete-btn"]}  onClick={this.props.deleteCard}>delete</button>
          </div>
          <input
              ref={(input)=>{this.inputElement = input;console.log(input)}}
              type="text" 
              onChange={this.props.changeName} 
              value={this.props.name} />
        </div>
      )
  }
}


Person.propTypes = {
  name: PropTypes.string,
  age:PropTypes.number,
  changeName:PropTypes.func,
  deleteCard: PropTypes.func,
}
export default Person