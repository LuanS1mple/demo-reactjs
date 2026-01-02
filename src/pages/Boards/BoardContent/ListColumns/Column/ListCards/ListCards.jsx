import React from 'react'
import { Box, Container, Typography } from '@mui/material';
import Card from './Card/Card';
function ListCards() {
  return (
     <Box sx={{
            p: '0 5px',
            m: '0 5px',
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            overflowX: 'hidden',
            overflowY: 'auto',
            maxHeight: '600px',
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#ced0da'
            },
            '&::-webkit-scrollbar-thumb:hover': {
              backgroundColor: '#bfc2cf'
            }
          }}>
            <Card></Card>
            <Card tempoaryHide ></Card>
            <Card tempoaryHide ></Card>
            <Card tempoaryHide ></Card>
            <Card tempoaryHide ></Card>
      </Box>
  )
}

export default ListCards