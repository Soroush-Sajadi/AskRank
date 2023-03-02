import React, { useEffect, useState } from "react"
import { ActionTypes } from '../../Strings'
import DropdownInput from "../../Common/DropdownInput"
import DashBox from "../Dash/DashBox"
import Btn from "../../Common/Components/Btn"
import { getOptions } from '../../Data/options'
import { getRankData } from '../../Data/rankData'
import { useSelector, useDispatch } from 'react-redux'
import { SelectedLanguage, OptionItem, LinkedOptionItem } from '../../Common/Types/service'
import { translate } from '../../Translate/translate'
import { dispatchData } from './optionBoxUtils'
import { ProgressSpinner } from 'primereact/progressspinner';
import './OptionsBox.css'

const OptionsBox = () => {
  const dispatch = useDispatch()
  const [ options, setOptions ] = useState<OptionItem[]>()
  const [ topic, setTopic ] = useState<OptionItem>()
  const [ subTopic, setSubTopic ] = useState<LinkedOptionItem>()
  const [ linkedOptions, setLinkedOptions ] = useState<LinkedOptionItem[]>([])
  const [ data, setData ] = useState([])
  const { selectedLanguage }  = useSelector((state: {selectedLanguage: SelectedLanguage}) => state)
  const hasData = data.length > 0
  const isBtnDisabled = topic && subTopic
  const visualTabs = [
    {caption: translate('0001'), value: 'Table'}, 
    {caption: translate('0002'), value: 'Chart'}
  ]
 
  useEffect(() => {
    const solvePromiseOptions = async () => {
      setLinkedOptions([])
      const options = await getOptions(selectedLanguage.code)
      setOptions(options)
    }
    solvePromiseOptions()
  }, [selectedLanguage])

  const onSelectPrimery = (option: OptionItem) => {
    setTopic(option)
    setLinkedOptions(option.linkedOptions)
  }

  const onSelectSecondary = (option: LinkedOptionItem) => {
    setSubTopic(option)
  } 

  const onSubmit = async() => {
    const rankData = await getRankData(topic!.val, subTopic!.val )
    dispatchData(topic!.val, subTopic!.val ,rankData, dispatch)  
    setData(rankData)
    dispatch({type: ActionTypes.TOPIC, payload: topic!.val})
    dispatch({type: ActionTypes.SUB_TOPIC, payload: subTopic!.val})
    
  }

  return (
    <div>
      { options &&
        <div className="OptionsBox">
          <DropdownInput 
            options={options} 
            placeholder='Select your favorite rank' 
            optionLabel='name' 
            onSelect={onSelectPrimery} 
            value={topic} 
          />
          <DropdownInput 
            options={linkedOptions} 
            placeholder='Select the area' 
            optionLabel='title' 
            onSelect={onSelectSecondary} 
            value={subTopic} 
            disabled={linkedOptions && linkedOptions.length === 0} 
          />
          <Btn label='Submit' submit={onSubmit} disabled={!isBtnDisabled}/>
        </div>
      }
      { hasData && <DashBox visualTabs={visualTabs} /> }
    </div>
  )
}
export default OptionsBox