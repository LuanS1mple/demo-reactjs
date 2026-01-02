import React from 'react'
import { Box, Container, Tooltip } from '@mui/material';
import Chip from '@mui/material/Chip';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Button from '@mui/material/Button';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { capitalizeFirstLetter } from '~/ulties/formatters'

const MENU_STYLE = { color: 'primary.main',
                      bgcolor: 'white',
                      border:'none',
                      paddingX: '5px',
                      borderRadius: '4px',
                      '& .MuiSvgIcon-root': {
                        color: 'primary.main'
                      },
                      '&:hover': {
                        bgcolor: 'primary.50'
                      }
                    }
function BoardBar({board}) {
  return (
    <Box sx={{
          width: '100%',
          height:(theme) => theme.app_demo.boardBarHeight,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
          px: 2,
          overflowX: 'auto',
          borderTop: 'solid 1px #00bf5a'
        }}>
      <Box sx={{display: 'flex',alignItems: 'center',gap: 2}}>
        <Chip sx={MENU_STYLE} icon={<DashboardIcon />} label={board?.title} clickable onClick={() => {}} />
        <Chip sx={MENU_STYLE} icon={<LockOpenIcon />} label={capitalizeFirstLetter(board?.type)} clickable onClick={() => {}} />
        <Chip sx={MENU_STYLE} icon={<DashboardIcon />} label="Public workspace" clickable onClick={() => {}} />
        <Chip sx={MENU_STYLE} icon={<AddToDriveIcon />} label="Add to Drive" clickable onClick={() => {}} />
      </Box>
      <Box sx={{display: 'flex',alignItems: 'center',gap: 2}}>
        <Button variant="outlined" startIcon={<PersonAddIcon/>}>Invite</Button>
        <Tooltip title='luan'>
          <AvatarGroup max={4} sx={{
            '& .MuiAvatar-root': {
              width: '34px',
              height: '34px',
              fontSize: '16px'
            }
          }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </AvatarGroup>
        </Tooltip>
      </Box>
    </Box>
  )
}

export default BoardBar