import React from "react"
import { useSelector } from 'react-redux'
import { DataTopics } from '../../Strings'
import CountriesTable from "../Topics/CountriesTable"
import CapitalCities from "../Topics/CapitalCities"

const TableBox = () => {
  const { topic } = useSelector((state: {topic: string}) => state)

  const getView = () => {
    if(topic === DataTopics.CAPITAL_CITIES) {
      return <CapitalCities/>
    }
    if(topic === DataTopics.COUNTRIES) {
      return <CountriesTable />
    }
  }
   
  return (
    <>
      { getView() }
    </>
  )
}

export default TableBox