import React from 'react'
import { useDispatch } from 'react-redux';

import { HeaderNavigation, AppName } from '../Strings'
const Header = () => {
  const dispatch = useDispatch();
  const onNavigate = (iconName: string ) => {
    dispatch({type:"HEADER_NAVIGATION", payload: iconName})
  }
  return (
    <div>
      <div className="flex justify-between pt-[20px] px-[100px]">
        <span className="text-[30px]">{AppName}</span>
        <div className="space-x-[30px]">
          <span className="text-[20px] cursor-pointer" onClick={() => onNavigate(HeaderNavigation.Home)}>{HeaderNavigation.Home}</span>
          <span className="text-[20px] cursor-pointer" onClick={() => onNavigate(HeaderNavigation.About)}>{HeaderNavigation.About}</span>
          <span className="text-[20px] cursor-pointer" onClick={() => onNavigate(HeaderNavigation.Contacts)}>{HeaderNavigation.Contacts}</span>
          <span className="text-[20px] cursor-pointer" onClick={() => onNavigate(HeaderNavigation.Language)}>{HeaderNavigation.Language}</span>
        </div>
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
    </div>
  )
}

export default Header