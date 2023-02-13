import React, { useRef, useEffect, useState } from "react"
import { useDispatch } from 'react-redux'
import { useSelector } from "react-redux"
import Flag from 'react-world-flags'
import { LanguageItem } from '../Data/languages.type'
import { ActionTypes } from '../Strings'
import CheckMark from "../Common/CheckMark"
import './LanguageDropdown.css'

const LanguageDropdown = () => {
  const dispatch = useDispatch();
  const [ allLanguages, setAllLanguages ] = useState<LanguageItem[]>()
  const { languages } = useSelector((state: {languages: LanguageItem[]}) => state)
  const { selectedLanguage } = useSelector((state: {selectedLanguage: {name: string, code: string}}) => state)

  useEffect(() => {
    const solveLanguages = async () => {
      const res =  await languages
      setAllLanguages(res)
    }
    solveLanguages()
  }, [])

  const onClickOutsideListener = () => {
    dispatch({type: ActionTypes.LANGUAGE_DROPDOWN, payload: false})
    document.removeEventListener("click", onClickOutsideListener)
  }

  const onSelectLanguage = (lang: {name: string, code: string}) => {
    dispatch({type: ActionTypes.SELECTED_LANGUAGE, payload: lang})
  }

  return (
    <div className="LanguageDropdown" onMouseLeave={() => {
      document.addEventListener("click", onClickOutsideListener)
    }}>
       {allLanguages && 
        allLanguages.map((lang, i) => 
          <div key={i} onClick={() => onSelectLanguage(lang)}>
            <div>
              <Flag code={lang.code} height={10} width={25} />
              <span>{lang.name}</span>
            </div>
            {
              lang.name === selectedLanguage.name && <CheckMark /> 
            }     
            </div>
        )}
      
    </div>
  )
}

export default LanguageDropdown