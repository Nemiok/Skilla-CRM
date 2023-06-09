import React from 'react'
import './styles.css'

interface iCustomCheckboxProps {
  checked: boolean | undefined,
  onChange: (checked: boolean) => void
}

const CustomCheckbox = ({ checked, onChange }: iCustomCheckboxProps) => {

  return (
    <input className={checked ? 'checkbox_input checkbox_input_active' : 'checkbox_input'} type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
  )
}

export default CustomCheckbox