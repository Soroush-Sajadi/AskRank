import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux'
import { TabView, TabPanel } from 'primereact/tabview';
import { DataVisualisation } from '../../Strings'
import TableBox from '../../Service/Table/TableBox'
import ChartBox from '../../Service/Chart/ChartBox'
import './DashBox.css'



interface HeadersProps {
  visualTabs: {
    caption: string
    value: string
  }[]
}
const DashBox = ({visualTabs}: HeadersProps) => {
  const tabs = visualTabs.map((tab, index) => {
    return (
      <TabPanel header={tab.caption} key={index}>
        {tab.value === DataVisualisation.TABLE && <TableBox />}
        {tab.value === DataVisualisation.CHART && <ChartBox />}
      </TabPanel>
    )
  })

  return (
    <div className='DashBox'>
      <TabView>
        { tabs }
      </TabView>
    </div>
  )
}
export default DashBox