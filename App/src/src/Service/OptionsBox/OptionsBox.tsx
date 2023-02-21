import React, { useEffect, useState } from "react"
import { ActionTypes } from '../../Strings'
import DropdownInput from "../../Common/DropdownInput"
import DashBox from "../Dash/DashBox"
import Btn from "../../Common/Components/Btn"
import { getOptions } from '../../Data/options'
import { getRankData } from '../../Data/rankData'
import { useSelector, useDispatch } from 'react-redux'
import { SelectedLanguage, OptionItem, LinkedOptionItem } from '../../Common/Types/service'
import { dispatchData } from './optionBoxUtils'

import './OptionsBox.css'

const OptionsBox = () => {
  const dispatch = useDispatch()
  const [ options, setOptions ] = useState<OptionItem[]>()
  const [ selcetedPrimeryValue, setSelcetedPrimeryValue ] = useState<OptionItem>()
  const [ selcetedSecondaryValue, setSelcetedSecondaryValue ] = useState<LinkedOptionItem>()
  const [ linkedOptions, setLinkedOptions ] = useState<LinkedOptionItem[]>([])
  const [ data, setData ] = useState([])
  const { selectedLanguage }  = useSelector((state: {selectedLanguage: SelectedLanguage}) => state)
  const hasData = data.length > 0
  const isBtnDisabled = selcetedPrimeryValue && selcetedSecondaryValue
 
  useEffect(() => {
    const solvePromiseOptions = async () => {
      setLinkedOptions([])
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

  const onSelectSecondary = (val: LinkedOptionItem) => {
    setSelcetedSecondaryValue(val)
    dispatch({type: ActionTypes.Selected_Secondary_Option, payload: val.title})
  } 

  const onSubmit = async() => {
    const rankData = await getRankData(selcetedPrimeryValue!.val, selcetedSecondaryValue!.val )
    dispatchData(selcetedPrimeryValue!.name, rankData)
    setData(rankData)
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
            optionLabel='title' 
            onSelect={onSelectSecondary} 
            value={selcetedSecondaryValue} 
            disabled={linkedOptions && linkedOptions.length === 0} 
          />
          <Btn label='Submit' submit={onSubmit} disabled={!isBtnDisabled}/>
        </div>
      }
      { hasData && <DashBox /> }
    </div>
  )
}
export default OptionsBox