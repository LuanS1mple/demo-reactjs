import React from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Cloud, DeleteForever } from '@mui/icons-material';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import AddCardIcon from '@mui/icons-material/AddCard';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import { Box, Container, Typography } from '@mui/material';
import ListCards from './ListCards/ListCards';

function Column() {
  const COLUMN_HEADER_HEIGHT = '50px';
  const COLUMN_FOOTER_HEIGHT = '50px';
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{minWidth: '300px',maxWidth: '300px', bgcolor: (theme) => (theme.palette.mode=== 'dark'? '#34495e' : '#1976d2'), ml: 2, borderRadius: '6px', 
        height: 'fit-content',maxHeight: '700px'
        }}>
          <Box sx={{
            height: COLUMN_HEADER_HEIGHT,
            p: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <Typography sx={{
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '1rem'
            }}>
              Column
            </Typography>
            <Box>
              <Tooltip title='select'>
                <ExpandMoreIcon sx={{
                  color: 'text.primary', cursor: 'pointer',
                }}   
                id="basic-column-dropdown"
                aria-controls={open ? 'basic-column-dropdown' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}/>
              </Tooltip>
              <Menu
                id="basic-column-dropdown"
                aria-labelledby="label-column-dropdown"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
              >
                <MenuItem>
                  <ListItemIcon><AddCardIcon/></ListItemIcon>
                  <ListItemText>Add new card</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon><ContentCutIcon/></ListItemIcon>
                  <ListItemText>Cut</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon><ContentCopyIcon/></ListItemIcon>
                  <ListItemText>Copy</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon><ContentPasteIcon/></ListItemIcon>
                  <ListItemText>Paste</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem >
                  <ListItemIcon ><Cloud fontSize='small'></Cloud></ListItemIcon>
                  <ListItemText >Save</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon ><DeleteForever fontSize='small'/></ListItemIcon>
                  <ListItemText >Remove</ListItemText>
                </MenuItem>
              </Menu>
            </Box>
          </Box>
          
          <ListCards></ListCards>        

          <Box sx={{
            height: COLUMN_FOOTER_HEIGHT,
            p: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <Button startIcon={<AddCardIcon/>}>Add new card</Button>
            <Tooltip title='Drag to move'>
              <DragHandleIcon sx={{cursor:'pointer'}}/>
            </Tooltip>
          </Box>
    </Box>
  )
}

export default Column