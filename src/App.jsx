
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import LightModeIcon from '@mui/icons-material/LightMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import {
  useColorScheme,
} from '@mui/material/styles';
import { Box, Container } from '@mui/material';
function ModeSelect() {
  // const [age, setAge] = React.useState('');
  const {mode, setMode} = useColorScheme()
  const handleChange = (event) => {
    const selectedMode = event.target.value
    setMode(selectedMode)
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="select-mode">Mode</InputLabel>
      <Select
        labelId="label-select-mode"
        id="select-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value="light">
          <div style={{display: "flex", alignItems: "center", gap: "8px"}} >
            <LightModeIcon fontSize='small'/> Light
          </div>
        </MenuItem>
        <MenuItem value="dark">
          <Box sx={{display: "flex", alignItems: "center", gap: 1}}>
            <DarkModeOutlinedIcon/>  Dark
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box sx={{display: "flex", alignItems: "center", gap: 1}}>
            <SettingsBrightnessIcon/> System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  );
}

function App() {

  return (
    <>
      <Container maxWidth={false} disableGutters sx={{
        height: '100vh'
      }}>
        <Box sx={
          { 
            backgroundColor:'red',
            height: (theme) => theme.app_demo.headBarHeight ,
            display: 'flex',
            alignItems: 'center'
          }
        }>
          <ModeSelect/>
        </Box>
        <Box sx={{
          backgroundColor:'blue',
          height:(theme) => theme.app_demo.boardBarHeight,
          display: 'flex',
          alignItems: 'center'
        }}>
          Board bar
        </Box>
        <Box sx={{
          backgroundColor:'green',
          height:(theme) => `calc(100vh - ${theme.app_demo.headBarHeight} - ${theme.app_demo.boardBarHeight})`,
          display: 'flex',
          alignItems: 'center'
        }}>
          Content bar
        </Box>
      </Container>
    </>
  )
}

export default App
