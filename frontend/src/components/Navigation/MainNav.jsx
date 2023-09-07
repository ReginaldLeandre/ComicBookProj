import {Link} from 'react-router-dom'



const MainNav = () => {


    return(
        <header>
            <div>

                <Link to="/">


                    List of Characters
                
                
                </Link>
                <br></br>
                <Link to="search">
                
                
                    Search Character
                
                </Link>

            </div>




        </header>


    )
}













export default MainNav;