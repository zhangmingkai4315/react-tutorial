import React from 'react'
import cssClassHeader from './Header.css'
const Header = (props) => {
  return (<div className={cssClassHeader["header"]}>
    <button className={cssClassHeader["switch-btn"]} onClick={props.switchHandler}>Switch</button>
    <button className={cssClassHeader["switch-btn"]} onClick={props.showOrHidePanel}>{props.showPanel ? "Hide" : "Show"}</button>
  </div>)
}
export default Header