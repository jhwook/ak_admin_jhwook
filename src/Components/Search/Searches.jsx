import { InputAdornment, TextField } from '@mui/material'
import React, { KeyboardEvent, KeyboardEventHandler, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'


const ChildProps = {
    searchState: (value) => {
        console.log(value)
    }
}

const Searches = (props) => {
    const [searchval, setSearchval] = useState();

    return (
        <TextField
            label="검색"
            id="outlined-start-adornment"
            value={searchval}
            onChange={e => setSearchval(e.target.value)}
            sx={{ m: 1, width: '298px' }}
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