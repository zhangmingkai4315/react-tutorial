import React, { PureComponent } from 'react'
import Person from './Person/Person';
import cssPersons from './Persons.css'
// const Persons = (props) =>{
//   let renderPersons = props.persons.map((item, index) => {
//     if (item.info) {
//       return (
//           <Person
//             name={item.name}
//             changeName={props.changeName.bind(null, item.id)}
//             showId={props.showId.bind(null, item.id)}
//             deleteCard={props.deleteCard.bind(null, item.id)}
//             key={item.id}
//             age={item.age}>{item.info}
//           </Person>
//       )
//     } else {
//       return (
//         <Person
//           name={item.name}
//           changeName={props.changeName.bind(null, item.id)}
//           showId={props.showId.bind(null, item.id)}
//           deleteCard={props.deleteCard.bind(null, item.id)}
//           key={item.id}
//           age={item.age} />
//       )
//     }
//   })
//   return (<div className={cssPersons.persons}>
//     {renderPersons}
//   </div>)
// }

class Persons extends PureComponent {
  constructor(props){
    super(props)
    console.log("persons constructor")
  }
  componentWillMount() {
    console.log("persons componentWillMount")
  }
  componentDidMount() {
    console.log("persons componentDidMount")
  }

  componentWillReceiveProps(nextProps){
    console.log("componentWillReceiveProps",nextProps)
  }

  // 使用PureComponent来更新
  // shouldComponentUpdate(nextProps,nextState){
  //   console.log("shouldComponentUpdate",nextProps,nextState)
  //   // 如果返回false 则不会调用render方法
  //   return true
  // }

  componentWillUpdate(nextProps,nextState) {
    console.log("componentWillUpdate",nextProps,nextState)
  }
  componentDidUpdate(nextProps, nextState) {
    console.log("componentDidUpdate", nextProps, nextState)
  }
  render(){
    console.log("persons render")
    let renderPersons = this.props.persons.map((item, index) => {
      if (item.info) {
        return (
            <Person
              name={item.name}
              changeName={this.props.changeName.bind(null, item.id)}
              showId={this.props.showId.bind(null, item.id)}
              deleteCard={this.props.deleteCard.bind(null, item.id)}
              key={item.id}
              age={item.age}>{item.info}
            </Person>
        )
      } else {
        return (
          <Person
            name={item.name}
            changeName={this.props.changeName.bind(null, item.id)}
            showId={this.props.showId.bind(null, item.id)}
            deleteCard={this.props.deleteCard.bind(null, item.id)}
            key={item.id}
            age={item.age} />
        )
      }
    })
    return (<div className={cssPersons.persons}>
      {renderPersons}
    </div>)
  }
}
export default Persons