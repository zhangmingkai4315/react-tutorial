import React from 'react'
import Person from './Person/Person';
import cssPersons from './Persons.css'
const Persons = (props) =>{
  let renderPersons = props.persons.map((item, index) => {
    if (item.info) {
      return (
          <Person
            name={item.name}
            changeName={props.changeName.bind(null, item.id)}
            showId={props.showId.bind(null, item.id)}
            deleteCard={props.deleteCard.bind(null, item.id)}
            key={item.id}
            age={item.age}>{item.info}
          </Person>
      )
    } else {
      return (
        <Person
          name={item.name}
          changeName={props.changeName.bind(null, item.id)}
          showId={props.showId.bind(null, item.id)}
          deleteCard={props.deleteCard.bind(null, item.id)}
          key={item.id}
          age={item.age} />
      )
    }
  })
  return (<div className={cssPersons.persons}>
    {renderPersons}
  </div>)
}
export default Persons