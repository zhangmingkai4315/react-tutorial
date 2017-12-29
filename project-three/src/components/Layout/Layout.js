import React ,{Component}from 'react'
import Aux from '../../HOC/Aux'
import css from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
class Layout extends  Component {
  state = {
    showSideDrawer : false
  }
  closeSideDrawer=()=>{
    this.setState({showSideDrawer:false})
  }
  openMenu =()=>{
    this.setState((prev)=>{
      return { showSideDrawer: !prev.showSideDrawer}
    })
  }
  render(){
    return(
        <Aux>
          <div>
            <SideDrawer 
              open = {this.state.showSideDrawer}
              close ={this.closeSideDrawer}/>
          <Toolbar openMenu={this.openMenu}/> 
          </div>
          <main className={css.Content}>
            {this.props.children}
          </main>
        </Aux>
      )
  }
}
export default Layout;