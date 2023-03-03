import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch } from 'react-redux'
import { faSortAmountDesc, faSortAmountAsc } from '@fortawesome/free-solid-svg-icons'
import { SortSet } from "src/Common/Types/CommonTypes"
import { ActionTypes } from 'src/Strings'

interface SortIconNumericProps {
  isActiveSortColumn?: boolean
  sortPress: (sort: SortSet) => void
  table: string
  column: string
}

const SortIconNumeric = ({isActiveSortColumn = false, sortPress, table, column}: SortIconNumericProps) => {
  const [isAsc, setIsAsc] = useState<boolean>(true)
  const dispatch = useDispatch()

  if(!isActiveSortColumn) {
    return(
      <div style={{cursor: 'pointer'}}>
        <FontAwesomeIcon 
          icon={faSortAmountAsc} 
          color={'gray'} 
          onClick={
            () => dispatch( {type: ActionTypes.SORT_SET, payload:{table, column, sortingOption:'DECS'}} )
          }/>
      </div>
    
    )
  }

  const toggleSort = () => {
    sortPress({
      table,
      column,
      sortingOption: !isAsc ? 'ASCS': 'DECS'
    })
    dispatch( {type: ActionTypes.SORT_SET, payload:{table, column, sortingOption: !isAsc ? 'ASCS': 'DECS'}})
    setIsAsc(!isAsc)
  }
  
  return (
    <div style={{cursor: 'pointer'}}>
      <FontAwesomeIcon icon={isAsc ? faSortAmountAsc: faSortAmountDesc} onClick={toggleSort} color={'green'}  />
    </div>
  )
}

export default SortIconNumeric