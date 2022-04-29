import * as React from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'


export default function ContainedButton({ subject, handleOpen }) {
    return (
        <Stack direction="row" spacing={2}>
            <Button
                sx={{
                    width: '162px',
                    height: '55.1px',
                }}
                onClick={handleOpen}
                variant="contained"
            >
                {subject}
            </Button>
        </Stack>
    )
}
