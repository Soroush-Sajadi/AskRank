import React, { useEffect, useState } from "react"
import DropdownInput from "../Common/DropdownInput"
import { getOptions } from '../Data/options'
const OptionsBox = () => {
  const [ options, setOptions ] = useState<string[]>()

  useEffect(() => {
    const solvePromiseOptions = async () => {
      const options = await getOptions()
      setOptions(options)
    }
    solvePromiseOptions()
  }, [])
  console.log(options)
  return (
    <>
     {options &&
      <div>
        <DropdownInput options={options} placeholder='Select your favorite rank' />
      </div>
    }
    </>
   
   
  )
}
export default OptionsBox