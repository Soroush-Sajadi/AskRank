import React, { useEffect, useState } from "react"
import { ActionTypes } from '../Strings'
import DropdownInput from "../Common/DropdownInput"
import Btn from "../Common/Components/Btn"
import { getOptions, fetchDataForSelectedOptions } from '../Data/options'
import { useSelector, useDispatch } from 'react-redux'
import { SelectedLanguage, OptionItem } from '../Common/Types/service'
import './OptionsBox.css'

const OptionsBox = () => {
  const dispatch = useDispatch()
  const [ options, setOptions ] = useState<OptionItem[]>()
  const [ selcetedPrimeryValue, setSelcetedPrimeryValue ] = useState<OptionItem>()
  const [ selcetedSecondaryValue, setSelcetedSecondaryValue ] = useState<{name: string}>()
  const [ linkedOptions, setLinkedOptions ] = useState<{name: string}[]>([])
  const { selectedLanguage }  = useSelector((state: {selectedLanguage: SelectedLanguage}) => state)
  const isBtnDisabled = selcetedPrimeryValue && selcetedSecondaryValue
 
  useEffect(() => {
    const solvePromiseOptions = async () => {
      const options = await getOptions(selectedLanguage.code)
      setOptions(options)
    }
    solvePromiseOptions()
  }, [selectedLanguage])

  const onSelectPrimery = (val: OptionItem) => {
    setSelcetedPrimeryValue(val)
    dispatch({type: ActionTypes.Selected_Primery_Option, payload: val.name})
    setLinkedOptions(val.linkedOptions)
  }

  const onSelectSecondary = (val: {name: string}) => {
    setSelcetedSecondaryValue(val)
    dispatch({type: ActionTypes.Selected_Secondary_Option, payload: val.name})
  } 

  const onSubmit = async() => {
    const res = await fetchDataForSelectedOptions(selcetedPrimeryValue!.name, selcetedSecondaryValue!.name )

  }

  return (
    <div>
     {options &&
      <div className="OptionsBox">
        <DropdownInput 
          options={options} 
          placeholder='Select your favorite rank' 
          optionLabel='name' 
          onSelect={onSelectPrimery} 
          value={selcetedPrimeryValue} 
        />
        <DropdownInput 
          options={linkedOptions} 
          placeholder='Select the area' 
          optionLabel='name' 
          onSelect={onSelectSecondary} 
          value={selcetedSecondaryValue} 
          disabled={linkedOptions && linkedOptions.length=== 0} 
        />
        <Btn label='Submit' submit={onSubmit} disabled={!isBtnDisabled}/>
      </div>
    }
    </div>
  )
}
export default OptionsBox