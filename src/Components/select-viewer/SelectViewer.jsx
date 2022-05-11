import { MenuItem, TextField } from '@mui/material'
import React from 'react'


const SelectViewer = ({ title, menu }) => {
  
  return (
    <TextField
      sx={{
        width: '100%',
      }}
      id="outlined-select-currency"
      select
      label={title}
    >
      {menu.map((option, index) => (
        <MenuItem key={index} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  )
}

export default SelectViewer
