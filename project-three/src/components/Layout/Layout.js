import React from 'react'
import Aux from '../../HOC/Aux'
import css from './Layout.css'
const layout = (props) => (
  <Aux>
    <div>
      ToolBar,SideDrawer,BackDrop
    </div>
    <main className={css.Content}>
      {props.children}
    </main>
  </Aux>
)

export default layout;