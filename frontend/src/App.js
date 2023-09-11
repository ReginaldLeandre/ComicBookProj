import logo from './logo.svg';
import './App.css';


/*                                      basic imports                                               */
import { Routes, Route } from 'react-router-dom';








/*                                      Components                                                  */
import Header from './components/Header/Header';






/*                                         pages                                                     */
import Characters from "./pages/Characters/Characters";
import Search from "./pages/Search/Search";
import CharacterDetails from './pages/CharacterDetails/CharacterDetails';
import ComicDetails from './pages/ComicDetails/ComicDetails'




import {useState} from 'react'
import { UserContext } from './data';
import Main from './components/Main/Main';

function App() {
  const [user, setUser] = useState(getUser())


  
  return (
    <div className="App">
      <Header />
      <Main />

      
  
    </div>
  );
}

export default App;
