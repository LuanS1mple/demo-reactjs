import React from 'react'
import { Box, Container } from '@mui/material';
function BoardContent() {
  return (
    <Box sx={{
          backgroundColor:'green',
          height:(theme) => `calc(100vh - ${theme.app_demo.headBarHeight} - ${theme.app_demo.boardBarHeight})`,
          display: 'flex',
          alignItems: 'center'
        }}>
      Content bar
    </Box>
  )
}

export default BoardContent