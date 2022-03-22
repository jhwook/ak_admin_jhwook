import { InputAdornment, TextField } from '@mui/material'
import React, { KeyboardEvent, KeyboardEventHandler, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'


const ChildProps = {
  searchState: (value) => {
    return {
      search: value,
    }
  }
 }

const Searches = (props) => {
  const [searchval, setSearchval]=useState('');
  function handleKeyPress(KeyboardEventHandler) {
    if (props.key=='Enter'){
      props.searchState(searchval)
    }
  }
  return (
    <TextField
      label="검색"
      id="outlined-start-adornment"
      onKeyPress={handleKeyPress}
      value={searchval}
      onChange={e=>setSearchval(e.target.value)}
      sx={{ m: 1, width: '50%' }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
          
        ),
      }}
    />
  )
}

export default Searches
