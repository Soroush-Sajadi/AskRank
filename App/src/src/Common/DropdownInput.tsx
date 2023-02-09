import React, { useState } from "react"
import { Dropdown } from 'primereact/dropdown';

interface DropdownInputProps {
  options: string[]
  placeholder: string
}
                
const DropdownInput = ({options , placeholder}: DropdownInputProps) => {
  const [value, setValue] = useState<string>()
  return (
    <Dropdown value={value} onChange={(e) => setValue(e.value)} options={options} optionLabel="name" placeholder={placeholder} className="w-full md:w-14rem" />
  )
}
export default DropdownInput