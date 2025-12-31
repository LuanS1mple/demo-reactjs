import { BorderColor, Height } from '@mui/icons-material';
import { experimental_extendTheme as extendTheme} from '@mui/material/styles';
const APP_BAR_HEIGHT = '52px';
const BOARD_BAR_HEIGHT = '58px';
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`
// Create a theme instance.
const theme = extendTheme({
  app_demo:{
    headBarHeight: APP_BAR_HEIGHT,
    boardBarHeight: BOARD_BAR_HEIGHT,
    boardContentHeight: BOARD_CONTENT_HEIGHT
  },
  colorSchemes: {
    light: {
      palette: {
          primary: {
            main: '#8e44ad'
          }
      }
    },
    dark: {
      palette: {
          primary: {
          main: '#000'
        }
      }
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': {
            with: '8px',
            Height: '8px'
          },
          '*::-webkit-scrollbar-thumb': {
            backGroundColor: '#8e44ad'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backGroundColor: '#8e44ad'
          }
        }
      }
    },
    // Name of the component
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({theme}) => {
          // Some CSS
          return {
            color: theme.palette.primary.main,
            fontSize: '0.875rem',
          }
        },
      },
    },
     MuiTypography: {
      styleOverrides: {
        root: {
          '&.MuiTypography-body1': {fontSize: '0.875rem'}
        }
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        // Name of the slot
        root: ({theme}) => {
          // Some CSS
          return {
            color: theme.palette.primary.main,
            fontSize: '0.875rem',
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: 'theme.palette.primary.light'
            },
            '&:hover': {
              borderColor: theme.palette.primary.light
            },
            '& fieldset': {
              borderWidth: '2px !important'
            }
          }
        },
      },
    }
  }
})

export default theme;