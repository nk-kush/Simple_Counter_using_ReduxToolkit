import { Paper } from '@mui/material';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import Card from '@mui/material/Card';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { red } from '@mui/material/colors';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, selectCount, increaseByTen, decreaseByTen, resetCounter, 
  decreaseByHundred, increaseByHundred } from './store/counterSlice';


function App() {

  const themePaper = createTheme({
    palette: { mode: 'dark' }
  });

  const themeButton = createTheme({
    palette: { primary: red },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 20,
          }
        }
      }
    }
  });

  const count = useSelector(selectCount);
  const dispatch = useDispatch();
    
  return (
    <div>
      <ThemeProvider theme={themePaper}>
        <Paper className='fullPagePaper' elevation={10}>

          <Paper className='counterPaper' elevation={0}>
            <h1 className='header'>Simple Counter</h1>
            <Card className='cardCounter'><h1 className='counter'>{count}</h1></Card>
          </Paper>

          <ThemeProvider theme={themeButton}>
            <div className='buttonAlign'>
              <Button onClick={() => dispatch(increment())} variant='contained'>Increase<ArrowDropUpIcon /></Button>
            </div>
            <div className='buttonAlign'>
              <Button onClick={() => dispatch(decrement())} variant='contained'>Decrease<ArrowDropDownIcon /></Button>
            </div>
            <div className='buttonAlign'>
              <Button onClick={() => dispatch(increaseByTen())} variant='contained'><AddIcon />10</Button>
            </div>
            <div className='buttonAlign'>
              <Button onClick={() => dispatch(decreaseByTen())} variant='contained'><RemoveIcon />10</Button>
            </div>
            <div className='buttonAlign'>
              <Button onClick={() => dispatch(increaseByHundred())} variant='contained'><AddIcon />100</Button>
            </div>
            <div className='buttonAlign'>
              <Button onClick={() => dispatch(decreaseByHundred())} variant='contained'><RemoveIcon />100</Button>
            </div>
            <div className='buttonAlign'>
              <Button onClick={() => dispatch(resetCounter())} variant='contained'><RestartAltIcon/></Button>
            </div>
          </ThemeProvider>
        </Paper>
      </ThemeProvider>
    </div>
  );
}

export default App;
