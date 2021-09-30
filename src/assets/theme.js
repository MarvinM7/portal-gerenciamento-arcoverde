import { createTheme } from '@material-ui/core/styles';

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
        main: '#8c8c8c',
        dark: '#32523a',
        contrastText: '#fff',
      }
    },
    typography: {
        fontFamily: ['"Roboto"', 'sans-serif'].join(','),
        fontWeightBold: "bold"
    }
  });

export default theme;