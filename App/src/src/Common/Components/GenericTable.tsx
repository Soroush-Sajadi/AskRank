import React, { ReactNode } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { translate } from "../../Translate/translate";
import './GenericTable.css'
import { SortSet } from "../Types/CommonTypes";
import { checkIsFocusedColumn } from '../../Service/Topics/Countries/countriesUtils'
import SortIconAlphabet from "../../Common/Components/SortIconAlphabet";



interface GenericTableProps {
  selectedData: any[]
  children?: ReactNode
  sortSet: SortSet
}
const GenericTable = ({ selectedData, children, sortSet}: GenericTableProps) => {
  const minWidthHeader = 95 / (selectedData.length + 1)

  const onSortPress = (res: SortSet) => {
  }

  const nameHeader = (table: string, field: string, header: string) => {
    const isFocusedColumn = checkIsFocusedColumn({table, column: field }, sortSet)
    return(
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <span>{translate(header)}</span>
        <SortIconAlphabet isActiveSortColumn={isFocusedColumn} table={table} column={field} sortPress={onSortPress}/>
      </div>
    )
  }
  

  return (
    <div style={{ display: "flex" }}>
     {children}
      {selectedData.map((table, index) => {
        return <DataTable
          value={table.data}
          header={translate(table.header)}
          key={index}
          tableStyle={{ minWidth: `${minWidthHeader}rem` }}
        >
          {table.titles.map((title: {header: string, field: string}, index: number) => {
            return <Column
            key={index}
            field={title.field}
            header={nameHeader(table.field, title.field, title.header)}
            >
            </Column>
          })}
          
        </DataTable>
      })}
    </div>
  )
}

export default GenericTable

