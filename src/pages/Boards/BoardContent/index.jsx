import React from 'react'
import { Box, Container, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Check from '@mui/icons-material/Check';
import { Cloud, DeleteForever } from '@mui/icons-material';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import AddCardIcon from '@mui/icons-material/AddCard';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CommentIcon from '@mui/icons-material/Comment';
import GroupIcon from '@mui/icons-material/Group';
import AttachFileIcon from '@mui/icons-material/AttachFile';



function BoardContent() {
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
    <Box sx={{
          // backgroundColor:'green',
          height:(theme) => theme.boardContentHeight,
          display: 'flex',
          alignItems: 'center',
          width:'100%',
          p: '10px 0'
        }}>
      <Box sx={{
        bgcolor: 'inherit',
        widows: '100%',
        height:'100%',
        display: 'flex',
        overflowX: 'auto',
        overflowY: 'hidden'
      }}>
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
            <Card sx={{ maxWidth: 345,cursor:'pointer', boxShadow: '0 1px 1px rgba(0,0,0,0.2)', overflow: 'unset'}}>
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
            </Card>
            <Card sx={{ maxWidth: 345,cursor:'pointer', boxShadow: '0 1px 1px rgba(0,0,0,0.2)',overflow: 'unset' }}>
              <CardContent sx={{p: 1.5, '&:last-child': {p: 1.5}}}>
                <Typography>
                  Card 02
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345,cursor:'pointer', boxShadow: '0 1px 1px rgba(0,0,0,0.2)',overflow: 'unset' }}>
              <CardContent sx={{p: 1.5, '&:last-child': {p: 1.5}}}>
                <Typography>
                  Card 02
                </Typography>
              </CardContent>
            </Card>
          
          <Card sx={{ maxWidth: 345,cursor:'pointer', boxShadow: '0 1px 1px rgba(0,0,0,0.2)',overflow: 'unset' }}>
              <CardContent sx={{p: 1.5, '&:last-child': {p: 1.5}}}>
                <Typography>
                  Card 02
                </Typography>
              </CardContent>
            </Card>
          
          <Card sx={{ maxWidth: 345,cursor:'pointer', boxShadow: '0 1px 1px rgba(0,0,0,0.2)',overflow: 'unset' }}>
              <CardContent sx={{p: 1.5, '&:last-child': {p: 1.5}}}>
                <Typography>
                  Card 02
                </Typography>
              </CardContent>
            </Card>
          
          <Card sx={{ maxWidth: 345,cursor:'pointer', boxShadow: '0 1px 1px rgba(0,0,0,0.2)',overflow: 'unset' }}>
              <CardContent sx={{p: 1.5, '&:last-child': {p: 1.5}}}>
                <Typography>
                  Card 02
                </Typography>
              </CardContent>
            </Card>
          
          <Card sx={{ maxWidth: 345,cursor:'pointer', boxShadow: '0 1px 1px rgba(0,0,0,0.2)',overflow: 'unset' }}>
              <CardContent sx={{p: 1.5, '&:last-child': {p: 1.5}}}>
                <Typography>
                  Card 02
                </Typography>
              </CardContent>
            </Card>
          <Card sx={{ maxWidth: 345,cursor:'pointer', boxShadow: '0 1px 1px rgba(0,0,0,0.2)',overflow: 'unset' }}>
              <CardContent sx={{p: 1.5, '&:last-child': {p: 1.5}}}>
                <Typography>
                  Card 02
                </Typography>
              </CardContent>
            </Card>
          
          <Card sx={{ maxWidth: 345,cursor:'pointer', boxShadow: '0 1px 1px rgba(0,0,0,0.2)',overflow: 'unset' }}>
              <CardContent sx={{p: 1.5, '&:last-child': {p: 1.5}}}>
                <Typography>
                  Card 02
                </Typography>
              </CardContent>
            </Card>
          
          <Card sx={{ maxWidth: 345,cursor:'pointer', boxShadow: '0 1px 1px rgba(0,0,0,0.2)',overflow: 'unset' }}>
              <CardContent sx={{p: 1.5, '&:last-child': {p: 1.5}}}>
                <Typography>
                  Card 02
                </Typography>
              </CardContent>
            </Card>
          
          <Card sx={{ maxWidth: 345,cursor:'pointer', boxShadow: '0 1px 1px rgba(0,0,0,0.2)',overflow: 'unset' }}>
              <CardContent sx={{p: 1.5, '&:last-child': {p: 1.5}}}>
                <Typography>
                  Card 02
                </Typography>
              </CardContent>
            </Card>
          
          <Card sx={{ maxWidth: 345,cursor:'pointer', boxShadow: '0 1px 1px rgba(0,0,0,0.2)',overflow: 'unset' }}>
              <CardContent sx={{p: 1.5, '&:last-child': {p: 1.5}}}>
                <Typography>
                  Card 02
                </Typography>
              </CardContent>
            </Card>
          
          
            
            
          </Box>

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
            <Card sx={{ maxWidth: 345,cursor:'pointer', boxShadow: '0 1px 1px rgba(0,0,0,0.2)', overflow: 'unset'}}>
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
            </Card>
            <Card sx={{ maxWidth: 345,cursor:'pointer', boxShadow: '0 1px 1px rgba(0,0,0,0.2)',overflow: 'unset' }}>
              <CardContent sx={{p: 1.5, '&:last-child': {p: 1.5}}}>
                <Typography>
                  Card 02
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345,cursor:'pointer', boxShadow: '0 1px 1px rgba(0,0,0,0.2)',overflow: 'unset' }}>
              <CardContent sx={{p: 1.5, '&:last-child': {p: 1.5}}}>
                <Typography>
                  Card 02
                </Typography>
              </CardContent>
            </Card>
          
          <Card sx={{ maxWidth: 345,cursor:'pointer', boxShadow: '0 1px 1px rgba(0,0,0,0.2)',overflow: 'unset' }}>
              <CardContent sx={{p: 1.5, '&:last-child': {p: 1.5}}}>
                <Typography>
                  Card 02
                </Typography>
              </CardContent>
            </Card>
          
          <Card sx={{ maxWidth: 345,cursor:'pointer', boxShadow: '0 1px 1px rgba(0,0,0,0.2)',overflow: 'unset' }}>
              <CardContent sx={{p: 1.5, '&:last-child': {p: 1.5}}}>
                <Typography>
                  Card 02
                </Typography>
              </CardContent>
            </Card>
          
          <Card sx={{ maxWidth: 345,cursor:'pointer', boxShadow: '0 1px 1px rgba(0,0,0,0.2)',overflow: 'unset' }}>
              <CardContent sx={{p: 1.5, '&:last-child': {p: 1.5}}}>
                <Typography>
                  Card 02
                </Typography>
              </CardContent>
            </Card>
          
          <Card sx={{ maxWidth: 345,cursor:'pointer', boxShadow: '0 1px 1px rgba(0,0,0,0.2)',overflow: 'unset' }}>
              <CardContent sx={{p: 1.5, '&:last-child': {p: 1.5}}}>
                <Typography>
                  Card 02
                </Typography>
              </CardContent>
            </Card>
          <Card sx={{ maxWidth: 345,cursor:'pointer', boxShadow: '0 1px 1px rgba(0,0,0,0.2)',overflow: 'unset' }}>
              <CardContent sx={{p: 1.5, '&:last-child': {p: 1.5}}}>
                <Typography>
                  Card 02
                </Typography>
              </CardContent>
            </Card>
          
          <Card sx={{ maxWidth: 345,cursor:'pointer', boxShadow: '0 1px 1px rgba(0,0,0,0.2)',overflow: 'unset' }}>
              <CardContent sx={{p: 1.5, '&:last-child': {p: 1.5}}}>
                <Typography>
                  Card 02
                </Typography>
              </CardContent>
            </Card>
          
          <Card sx={{ maxWidth: 345,cursor:'pointer', boxShadow: '0 1px 1px rgba(0,0,0,0.2)',overflow: 'unset' }}>
              <CardContent sx={{p: 1.5, '&:last-child': {p: 1.5}}}>
                <Typography>
                  Card 02
                </Typography>
              </CardContent>
            </Card>
          
          <Card sx={{ maxWidth: 345,cursor:'pointer', boxShadow: '0 1px 1px rgba(0,0,0,0.2)',overflow: 'unset' }}>
              <CardContent sx={{p: 1.5, '&:last-child': {p: 1.5}}}>
                <Typography>
                  Card 02
                </Typography>
              </CardContent>
            </Card>
          
          <Card sx={{ maxWidth: 345,cursor:'pointer', boxShadow: '0 1px 1px rgba(0,0,0,0.2)',overflow: 'unset' }}>
              <CardContent sx={{p: 1.5, '&:last-child': {p: 1.5}}}>
                <Typography>
                  Card 02
                </Typography>
              </CardContent>
            </Card>
          
          
            
            
          </Box>

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
      </Box>
      
    </Box>
  )
}

export default BoardContent