import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HeaderNavigation, AppName, ActionTypes } from '../Strings'
import LanguageDropdown from '../LanguageDropdown'
import './header.css'

const Header = () => {
  const dispatch = useDispatch();
  const  { languageDropdown }  = useSelector((state: {languageDropdown: boolean}) => state)

  const onNavigate = (iconName: string ) => {
    dispatch({type: ActionTypes.HEADER_NAVIGATION, payload: iconName})
  }
  const onSelectLanguage = () => {
    dispatch({type: ActionTypes.LANGUAGE_DROPDOWN, payload: !languageDropdown})
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
            {languageDropdown && <LanguageDropdown />}
          </div>
        </div>
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
    </div>
  )
}

export default Header