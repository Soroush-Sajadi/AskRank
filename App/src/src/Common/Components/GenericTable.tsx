import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
interface GenericTableProps {
  commonData: any
  selectedData: any[]
}
const GenericTable = ({commonData, selectedData}: GenericTableProps) => {
  const minWidthHeader = 95 / (selectedData.length + 1) 
  console.log(minWidthHeader)
  console.log(selectedData)
  return (
    <div style={{ display: "flex" }}>
      <DataTable
        value={commonData.data}
        header={commonData.header}
        removableSort
        tableStyle={{ minWidth: `${minWidthHeader}rem` }}

      > 
        {commonData.titles.map((title: string, index: number) => {
          return <Column
            key={index}
            field={title}
            header={title}
            sortable
          >
          </Column>
        })}
      </DataTable>
      {selectedData.map((item, index) => {
        return <DataTable
          value={item.data}
          header={item.header}
          removableSort
          key={index}
          tableStyle={{ minWidth: `${minWidthHeader}rem` }}
        >
          {item.titles.map((title: string, index: number) => {
            return <Column
            key={index}
            field={title}
            header={title}
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

