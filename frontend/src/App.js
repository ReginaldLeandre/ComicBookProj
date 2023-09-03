import logo from './logo.svg';
import './App.css';


/*                                      basic imports                                               */
import { Routes, Route } from 'react-router-dom';








/*                                      Components                                                  */
import Header from './components/Header/Header';
import SearchPull from "./components/Search/SearchPull"





/*                                         pages                                                     */
import Characters from "./pages/Characters/Characters"





import {useState} from 'react'
import { MainNav } from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Header />


      <SearchPull />
     <Routes>
        <Route path="/" element={<Characters />}>
        </Route>


     </Routes>
    </div>
  );
}

export default App;
