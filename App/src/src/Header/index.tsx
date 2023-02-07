import React from 'react'
import { useDispatch } from 'react-redux';
import './header.css'

import { HeaderNavigation, AppName } from '../Strings'
const Header = () => {
  const dispatch = useDispatch();
  const onNavigate = (iconName: string ) => {
    dispatch({type:"HEADER_NAVIGATION", payload: iconName})
  }
  return (
    <div>
      <div className="Header">
        <span className="HeaderAppName">{AppName}</span>
        <div className="HeaderIcons">
          <span onClick={() => ""}>{HeaderNavigation.Home}</span>
          <span onClick={() => onNavigate(HeaderNavigation.About)}>{HeaderNavigation.About}</span>
          <span onClick={() => onNavigate(HeaderNavigation.Contacts)}>{HeaderNavigation.Contacts}</span>
          <span onClick={() => onNavigate(HeaderNavigation.Language)}>{HeaderNavigation.Language}</span>
        </div>
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
    </div>
  )
}

export default Header