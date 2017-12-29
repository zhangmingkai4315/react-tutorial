import React from 'react'
import Aux from '../../HOC/Aux'
import css from './Layout.css'
import Backdrop from '../ui/Backdrop/Backdrop';
import Toolbar from '../Navigation/Toolbar/Toolbar';
const layout = (props) => (
  <Aux>
    <div>
      <Toolbar/> 
    </div>
    <main className={css.Content}>
      {props.children}
    </main>
  </Aux>
)

export default layout;