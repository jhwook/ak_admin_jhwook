import React from 'react'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'


const Papers = ({ children, title }) => {
  return (
    <Paper
      sx={{
        p: 2,
        maxWidth: '1800px',
        maxHeight: '2000px',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
      }}
    >
      <Typography
        sx={{
          p: 2,
        }}
        component="h2"
        variant="h6"
        color="#000000"
        gutterBottom
      >
        {title}
      </Typography>
      {children}
    </Paper>
  )
}

export default Papers
