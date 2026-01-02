import  React from 'react';
import ModeSelect from '../ModeSelect/ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
import { ReactComponent as TrelloIcon } from '~/assets/trello.svg'
import SvgIcon from '@mui/material/SvgIcon';
import WorkSpace from './Menus/WorkSpace';
import Recent from './Menus/Recent';
import Started from './Menus/Started';
import Templates from './Menus/Templates';
import { Box, Container, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Tooltip from '@mui/material/Tooltip';
import Profiles from './Menus/Profiles';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
function AppBar() {
  return (
     <Box px={2} sx={
          { 
            height: (theme) => theme.app_demo.headBarHeight ,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
            overflowX: 'auto'
          }
        }>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2
        }}>
          <AppsIcon sx={{
            color: 'primary.main'
          }} />
          <Box sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 0.5
          }}>
            <SvgIcon component={TrelloIcon} inheritViewBox/>
            <Typography variant='span' sx={{fontSize: '1.2rem', fontWeight: 'bold', color: 'primary.main'}}>Trello</Typography>
          </Box>
          <Box sx={{display: {sx: 'none', md: 'flex'}, gap: 1}}>
            <WorkSpace/>
            <Recent/>
            <Started/>
            <Templates/>
            <Button variant="outlined">Create</Button>
          </Box>
         
        </Box>

        <Box sx={{ 
            height: (theme) => theme.app_demo.headBarHeight ,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2
          }}>
          <TextField  id="outlined-search" label="Search..." type="search" size='small' sx={{minWidth: '120px'}}/>
          <ModeSelect/>
          <Tooltip title='Notification'>
            <Badge color="secondary" variant="dot" sx={{cursor:'pointer'}}>
              <NotificationsIcon sx={{color: 'primary.main'}} />
            </Badge>
          </Tooltip>
          <Tooltip title='Help'>
            <Badge color="secondary" variant="dot" sx={{cursor:'pointer'}}>
              <HelpOutlineIcon sx={{color: 'primary.main'}} />
            </Badge>
          </Tooltip>
          <Profiles/>
        </Box>
      </Box>
  )
}
export default AppBar