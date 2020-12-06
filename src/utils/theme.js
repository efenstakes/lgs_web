import { red, orange } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';



// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#E4332D',
    },
    secondary: {
      main: '#ED1B24',
    },

    common: {
        black: '#2B2B2B',
    },
    
    error: {
      main: red.A400,
    },
    warning: {
      main: red.A100,
    },
    background: {
      default: '#fff',
    },
  },

  shape: {
    borderRadius: 12
  }
});

console.log('theme ', theme)

export default theme;