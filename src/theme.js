import { experimental_extendTheme as extendTheme} from '@mui/material/styles';
// Create a theme instance.
const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
          primary: {
            main: '#ff5252'
          }
      }
    },
    dark: {
      palette: {
          rimary: {
          main: '#000'
        }
      }
    }
  }
})

export default theme;