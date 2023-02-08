import React, { useCallback, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import Flag from 'react-world-flags'
import { LanguageItem } from '../Data/languages.type'
import './LanguageDropdown.css'

const LanguageDropdown = () => {
  const [ allLanguages, setAllLanguages ] = useState<LanguageItem[]>()
  const { languages } = useSelector((state: {languages: LanguageItem[]}) => state)

  useEffect(() => {
    const solveLanguages = async () => {
      const res =  await languages
      setAllLanguages(res)
    }
    solveLanguages()
  }, [])
  return (
   
    <div className="LanguageDropdown">
       {allLanguages && 
        allLanguages.map(lang => 
          <div>
            <Flag code={lang.code} height={10} width={25} />
            <span>{lang.name}</span>
          </div>
        )}
      
    </div>
  )
}

export default LanguageDropdown