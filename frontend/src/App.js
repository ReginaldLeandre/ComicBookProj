import logo from './logo.svg';
import './App.css';


/*                                      basic imports                                               */
import { Routes, Route } from 'react-router-dom';








/*                                      Components                                                  */
import Header from './components/Header/Header';






/*                                         pages                                                     */
import Characters from "./pages/Characters/Characters";
import SearchPull from "./pages/Search/SearchLogic/SearchPull";
import CharacterDetails from './pages/CharacterDetails/CharacterDetails';
import ComicDetails from './pages/ComicDetails/ComicDetails'




import {useState} from 'react'
import { MainNav } from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Header />


      
     <Routes>

        <Route path="/" element={<Characters />}>
        </Route> 
        <Route path="/search" element={<SearchPull />}>
        </Route>
        <Route path='/character/:id' element={<CharacterDetails />}>
        </Route>
        <Route path='/comics/:id' element={<ComicDetails />}>
        </Route>

     </Routes>
    </div>
  );
}

export default App;
