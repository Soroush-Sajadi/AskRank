import React from "react"
import { useSelector } from 'react-redux'
import GenericTable from '../../../Common/Components/GenericTable'
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Country, CountryForTable } from '../../../Common/Types/Country'
import Flag from 'react-world-flags'
import { translate } from "../../../Translate/translate";
import SortIconAlphabet from "../../../Common/Components/SortIconAlphabet";
import { getDataPreparedCountries, getCountriesSorted, checkIsFocusedColumn } from '../../Topics/Countries/countriesUtils'
import { TABLES_NAME, COLUMNS_NAME } from '../../../Strings'
import { SortSet } from "../../../Common/Types/CommonTypes";

const CountriesTable = () => {
  const { subTopic } = useSelector((state: {subTopic: string}) => state)
  const { countries } = useSelector((state: {countries: Country[]}) => state)
  const { sortSet } = useSelector((state: {sortSet: SortSet}) => state)
  const sortCountries = getCountriesSorted(countries, sortSet)
  const data: CountryForTable = getDataPreparedCountries(sortCountries, subTopic)


  const minWidthHeader = 95 / (data.selectedData.length + 1)

  const onSortPress = (sort: SortSet) => {
  } 
  const bodyTemplate = (rowData: any) => {
    return(
      <div>
        <Flag code={rowData.code} height={10} width={25} />
        <span>{rowData.name}</span>
      </div>
    )
  }

  const nameHeader = () => {
    const isFocusedColumn = checkIsFocusedColumn({table: TABLES_NAME.COUNTRIES, column: COLUMNS_NAME.NAME}, sortSet)
    return(
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <span>{translate('0007')}</span>
        <SortIconAlphabet isActiveSortColumn={isFocusedColumn} table={TABLES_NAME.COUNTRIES} column={COLUMNS_NAME.NAME} sortPress={onSortPress}/>
      </div>
    )
  }

  const continentHeader = () => {
    const isFocusedColumn = checkIsFocusedColumn({table: TABLES_NAME.COUNTRIES, column: COLUMNS_NAME.CONTINENT}, sortSet)
    return(
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <span>{translate('0008')}</span>
        <SortIconAlphabet isActiveSortColumn={isFocusedColumn} table={TABLES_NAME.COUNTRIES} column={COLUMNS_NAME.CONTINENT} sortPress={onSortPress} />
      </div>
    )
  }

  const commonColumn = () => {
    return (
      <DataTable
        value={data.commonData}
        header={translate('0003')}
        tableStyle={{ minWidth: `${minWidthHeader}rem` }}
      > 
        <Column
          field={'name'}
          header={nameHeader}
          body={bodyTemplate}
        >
        </Column>
        <Column
          field={'continent'}
          header={continentHeader}
        >
        </Column>
      </DataTable>
    )
  }

  return (
    <GenericTable 
      selectedData={data.selectedData}
      sortSet={sortSet}
      children={commonColumn()}
    />
  )
}
export default CountriesTable

