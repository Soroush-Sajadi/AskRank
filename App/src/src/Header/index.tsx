import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { HeaderNavigation, AppName, ActionTypes } from '../Strings'
import LanguageDropdown from '../LanguageDropdown'
import './header.css'

const Header = () => {
  const dispatch = useDispatch();
  const [ languageDropDown, setLanguageDropDown ] = useState(false)

  const onNavigate = (iconName: string ) => {
    dispatch({type: ActionTypes.HEADER_NAVIGATION, payload: iconName})
  }
  const onSelectLanguage = () => {
    setLanguageDropDown(!languageDropDown)
    dispatch({type: ActionTypes.LANGUAGE_DROPDOWN, payload: languageDropDown})
  }
  return (
    <div>
      <div className="Header">
        <span className="HeaderAppName">{AppName}</span>
        <div className="HeaderIcons">
          <span onClick={() => onNavigate('')}>{HeaderNavigation.Home}</span>
          <span onClick={() => onNavigate(HeaderNavigation.About)}>{HeaderNavigation.About}</span>
          <span onClick={() => onNavigate(HeaderNavigation.Contacts)}>{HeaderNavigation.Contacts}</span>
          <div>
            <span onClick={onSelectLanguage}>{HeaderNavigation.Language}</span>
            {languageDropDown && <LanguageDropdown />}
          </div>
        </div>
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
    </div>
  )
}

export default Header