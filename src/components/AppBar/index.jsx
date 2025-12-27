import React from 'react'
import { Box, Container } from '@mui/material';
import ModeSelect from '../../components/ModeSelect'

function AppBar() {
  return (
     <Box sx={
          { 
            backgroundColor:'red',
            height: (theme) => theme.app_demo.headBarHeight ,
            display: 'flex',
            alignItems: 'center'
          }
        }>
        <ModeSelect/>
      </Box>
  )
}

export default AppBar