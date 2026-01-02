import React from 'react'
import Column from './Column/Column'
import { Box, Button, Container, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

function ListColumns() {
  
  return (
      <Box sx={{
        bgcolor: 'inherit',
        widows: '100%',
        height:'100%',
        display: 'flex',
        overflowX: 'auto',
        overflowY: 'hidden'
      }}>
        <Column></Column>
        <Column></Column>
        <Column></Column>
        <Box sx={{
          minWidth: '100px',
          maxWidth: '100px',
          mx: 2,
          borderRadius: '6px',
          height: 'fit-content',
          backgroundColor: '#ecf0f1'
        }}>
          <Button sx={{
            color: 'Black',
            width: '100%',
            justifyContent: 'start',
            pl: 2.5,
            py: 1
          }} startIcon= {<AddIcon sx={{color: 'black'}}/>}>
            Add
          </Button>
        </Box>
    </Box>
  )
}

export default ListColumns