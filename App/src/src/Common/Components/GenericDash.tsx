import React, { ReactNode } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { DataVisualisation } from '../../Strings'
import TableBox from '../../Service/Table/TableBox'
import ChartBox from '../../Service/Chart/ChartBox'



interface HeadersProps {
  headers: {
    caption: string
    value: string
  }[]
}
const GenericDash = ({headers}: HeadersProps) => {
  const tabs =  headers.map((header, index) => {
    return (
      <TabPanel header={header.caption} key={index}>
        {header.value === DataVisualisation.TABLE && <TableBox />}
        {header.value === DataVisualisation.CHART && <ChartBox />}
      </TabPanel>
    )
  })

  return (
    <TabView>
      { tabs }
    </TabView>
  )
}
export default GenericDash