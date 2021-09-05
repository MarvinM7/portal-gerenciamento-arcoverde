import { createTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const theme = createTheme({
  palette: {
    primary: {
      light: '#458925',
      main: '#06933C',
      dark: '#31611A',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    }
  },
  typography: {
      fontFamily: ['"Roboto"', 'sans-serif'].join(','),
      fontWeight: "bold"
  }
});

export default theme;