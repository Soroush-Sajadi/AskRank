import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch } from 'react-redux'
import { faSortAlphaAsc, faSortAlphaDesc } from '@fortawesome/free-solid-svg-icons'
import { SortSet } from "../Types/CommonTypes"
import { ActionTypes } from '../../Strings'

interface SortIconAlphabetProps {
  isActiveSortColumn?: boolean
  sortPress: (sort: SortSet) => void
  table: string
  column: string
}

const SortIconAlphabet = ({isActiveSortColumn = false, sortPress, table, column}: SortIconAlphabetProps) => {
  const [isAsc, setIsAsc] = useState<boolean>(true)
  const dispatch = useDispatch()
  const dispatchFocucedTable = () => {
    dispatch( {type: ActionTypes.SORT_SET, payload:{table, column, sortingOption:'DECS'}})
  }
  if(!isActiveSortColumn) {
    return(
      <div>
        <FontAwesomeIcon icon={faSortAlphaAsc} color={'gray'} onClick={dispatchFocucedTable}/>
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
    <FontAwesomeIcon icon={isAsc ? faSortAlphaAsc: faSortAlphaDesc} onClick={toggleSort} color={'green'}  />
  )
}

export default SortIconAlphabet