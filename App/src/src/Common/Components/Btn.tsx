import React from 'react';
import { Button } from 'primereact/button';

interface BtnProps {
  label: string
  submit: () => void
  disabled?: boolean
}

const Btn = ({label, submit, disabled = false}: BtnProps) => {
  return <Button label={label} onClick={submit} disabled={disabled} />
}
export default Btn