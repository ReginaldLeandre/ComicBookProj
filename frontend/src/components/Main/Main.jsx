import { Routes, Route} from "react-router-dom";


/***********************************************    Pages    ***********************************************8*/
import Characters from "../../pages/Characters/Characters";
import Search from "../../pages/Search/Search";
import CharacterDetails from "../../pages/CharacterDetails/CharacterDetails";
import ComicDetails from "../../pages/ComicDetails/ComicDetails";
import Error404 from '../../pages/Error/index'
// import SignUp from '../../pages/SignUp'




export default function Main(props) {



    return(
        <main>
            <Routes>

            <Route path="/home" element={<Characters />}>
            </Route> 
            <Route path="/search" element={<Search />}>
            </Route>
            <Route path='/character/:id' element={<CharacterDetails />}>
            </Route>
            <Route path='/comics/:id' element={<ComicDetails />}>
            </Route>
            {/* <Route path='/user/create' element={<SignUp />}>
            </Route> */}

            <Route path='/*' element={<Error404 />}>

            </Route>

            </Routes>

        </main>
    )
}