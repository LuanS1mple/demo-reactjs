import React from 'react'
import { Box, Container } from '@mui/material';
function BoardBar() {
  return (
    <Box sx={{
          backgroundColor:'blue',
          height:(theme) => theme.app_demo.boardBarHeight,
          display: 'flex',
          alignItems: 'center'
        }}>
      Board bar
    </Box>
  )
}

export default BoardBar