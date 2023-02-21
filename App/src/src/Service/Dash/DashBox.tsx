import React from 'react'
import GenericDash  from '../../Common/Components/GenericDash'
import { translate } from '../../Translate/translate'
import './DashBox.css'
const DashBox = () => {
  const headers = [
    {caption: translate('0001'), value: 'Table'}, 
    {caption: translate('0002'), value: 'Chart'}
  ]
  return (
    <div className='DashBox'>
      <GenericDash headers={headers} />
    </div>
   
  )
}

export default DashBox