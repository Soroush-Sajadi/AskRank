import React from "react"
import { useSelector } from 'react-redux'
import { Country } from "../../Common/Types/Country"
import { getDataPreparedCountries } from '../serviceUtils'
import GenericTable from '../../Common/Components/GenericTable'



const CountriesTable = () => {
  const { subTopic } = useSelector((state: {subTopic: string}) => state)
  const { countries } = useSelector((state: {countries: Country[]}) => state )
  console.log(countries)
  const countriesData = getDataPreparedCountries(countries, subTopic)
  console.log(countriesData)
  return (
    <GenericTable 
      commonData={countriesData.commonData}
      selectedData={countriesData.selectedData}
    />
  )
}
export default CountriesTable

