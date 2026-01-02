import React from 'react'
import Button from '@mui/material/Button';
import { Card as MuiCard } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CommentIcon from '@mui/icons-material/Comment';
import GroupIcon from '@mui/icons-material/Group';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { Box, Container, Typography } from '@mui/material';
function Card({tempoaryHide}) {
  if(tempoaryHide){
    return(
      <MuiCard sx={{ maxWidth: 345,cursor:'pointer', boxShadow: '0 1px 1px rgba(0,0,0,0.2)', overflow: 'unset'}}>
        <CardContent sx={{p: 1.5, '&:last-child': {p: 1.5}}}>
          <Typography>
            Card test
          </Typography>
        </CardContent>
    </MuiCard>
    )
  }
  return (
    <MuiCard sx={{ maxWidth: 345,cursor:'pointer', boxShadow: '0 1px 1px rgba(0,0,0,0.2)', overflow: 'unset'}}>
              <CardMedia
                sx={{ 
                  height: '140px'
                }}
                image="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"
                title="green iguana"
              />
              <CardContent sx={{p: 1.5, '&:last-child': {p: 1.5}}}>
                <Typography>
                  Beatiful Bird
                </Typography>
              </CardContent>
              <CardActions sx={{p: '0 4px 8px 4px'}}>
                <Button size="small" startIcon={<GroupIcon/>}>20</Button>
                <Button size="small" startIcon={<CommentIcon/>}>20</Button>
                <Button size="small" startIcon={<AttachFileIcon/>}>20</Button>
              </CardActions>
    </MuiCard>
  )
}

export default Card