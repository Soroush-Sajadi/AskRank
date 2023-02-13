import React, { useState } from "react"
import { Dropdown } from 'primereact/dropdown';
interface DropdownInputProps {
  options: any[] | undefined
  placeholder: string
  optionLabel: string
  onSelect: (val: any) => void
  disabled?: boolean
  value?: any
  width?: string
}
                
const DropdownInput = ({options , placeholder, optionLabel, onSelect, disabled = false, value, width = '300px'}: DropdownInputProps) => {
  const onDropdownChange = (val: any) => {
    onSelect(val)
  }
  

  return (
    <Dropdown
      style={{width}}
      value={value} 
      onChange={(e) => onDropdownChange(e.value)}
      options={options} 
      optionLabel={optionLabel} 
      placeholder={placeholder} 
      disabled={disabled}
    />
  )
}
export default DropdownInput