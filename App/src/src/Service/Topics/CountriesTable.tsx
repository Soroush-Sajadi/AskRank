import React from "react"
import { useSelector } from 'react-redux'
import GenericTable from '../../Common/Components/GenericTable'
import { SelectedLanguage } from '../../Common/Types/service'

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { CountryForTable } from '../../Common/Types/Country'
import Flag from 'react-world-flags'
import { translate } from "../../Translate/translate";
import { useEffect } from "react";

const CountriesTable = () => {
  const { countries } = useSelector((state: {countries: CountryForTable}) => state)
  const minWidthHeader = 95 / (countries.selectedData.length + 1)
  const bodyTemplate = (rowData: any) => {
    return(
      <div>
        <Flag code={rowData.code} height={10} width={25} />
        <span>{rowData.name}</span>
      </div>
    )
  }

  const commonColumn = () => {
   
    return (
      <DataTable
        value={countries.commonData}
        header={translate('0003')}
        removableSort
        tableStyle={{ minWidth: `${minWidthHeader}rem` }}
      > 
          <Column
            field={'name'}
            header={translate('0007')}
            sortable
            body={bodyTemplate}
          >
          </Column>
          <Column
            field={'continent'}
            header={translate('0008')}
            sortable
          >
          </Column>
      </DataTable>
    )
  }

  return (
    <GenericTable 
      commonData={countries.commonData}
      selectedData={countries.selectedData}
      children={commonColumn()}
    />
  )
}
export default CountriesTable

