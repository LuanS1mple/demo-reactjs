import React from 'react'
import { Box, Container, Typography } from '@mui/material';
import ListColumns from './ListColumns/ListColumns';
import {mapOrder } from '~/ulties/sorts'


function BoardContent({board}) {
  const orderedColumns = mapOrder(board?.columns, board?.columnOrderIds,'_id')
  return (
    <Box sx={{
          // backgroundColor:'green',
          height:(theme) => theme.boardContentHeight,
          display: 'flex',
          alignItems: 'center',
          width:'100%',
          p: '10px 0'
        }}>
      <ListColumns columns={orderedColumns}></ListColumns>
      
    </Box>
  )
}

export default BoardContent