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

  if(!isActiveSortColumn) {
    return(
      <div style={{cursor: 'pointer'}}>
        <FontAwesomeIcon icon={faSortAlphaAsc} color={'gray'} onClick={() =>  dispatch( {type: ActionTypes.SORT_SET, payload:{table, column, sortingOption:'ASCS'}})}/>
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
      <FontAwesomeIcon icon={isAsc ? faSortAlphaAsc: faSortAlphaDesc} onClick={toggleSort} color={'green'}  />
    </div>  
  )
}

export default SortIconAlphabet