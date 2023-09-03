import logo from './logo.svg';
import './App.css';


/*                                      basic imports                                               */
import { Routes, Route } from 'react-router-dom';


/*                                      Components                                                  */



/*                                         pages                                                     */
import Characters from "./pages/Characters/Characters"





import {useState} from 'react'

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Characters />}>
        </Route>


     </Routes>
    </div>
  );
}

export default App;
