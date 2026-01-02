import React from 'react'
import { Box, Container, Typography } from '@mui/material';
import ListColumns from './ListColumns/ListColumns';



function BoardContent() {

  return (
    <Box sx={{
          // backgroundColor:'green',
          height:(theme) => theme.boardContentHeight,
          display: 'flex',
          alignItems: 'center',
          width:'100%',
          p: '10px 0'
        }}>
      <ListColumns></ListColumns>
      
    </Box>
  )
}

export default BoardContent