import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from '@material-ui/styles';

import Root from './pages/Root';
import theme from './assets/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Root />
      </div>
    </ThemeProvider>
  );
}

export default App;
