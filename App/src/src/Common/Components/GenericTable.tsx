import React, { ReactNode } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { translate } from "../../Translate/translate";

interface GenericTableProps {
  commonData: any
  selectedData: any[]
  children?: ReactNode
}
const GenericTable = ({commonData, selectedData, children}: GenericTableProps) => {
  const minWidthHeader = 95 / (selectedData.length + 1) 
  

  return (
    <div style={{ display: "flex" }}>
     {children}
      {selectedData.map((item, index) => {
        return <DataTable
          value={item.data}
          header={translate(item.header)}
          removableSort
          key={index}
          tableStyle={{ minWidth: `${minWidthHeader}rem` }}
        >
          {item.titles.map((title: {header: string, field: string}, index: number) => {
            return <Column
            key={index}
            field={title.field}
            header={translate(title.header)}
            sortable
            >
            </Column>
          })}
          
        </DataTable>
      })}
    </div>
  )
}

export default GenericTable

