import './App.css';
import KeyBoard from './components/KeyBoard';
import Board from './components/Board';
import { createContext, useState } from 'react';
import { boardDefault } from './Words';


export const AppContext = createContext()

function App() {


  const [board, setBoard] = useState(boardDefault)

  return ( 
  
  <div className="App">
    <nav>
      <h1>Wordle</h1>
    </nav>
    <AppContext.Provider value={{board, setBoard}}>
      <Board />
      <KeyBoard />
    </AppContext.Provider>
  </div>
   
  );
}

export default App;
