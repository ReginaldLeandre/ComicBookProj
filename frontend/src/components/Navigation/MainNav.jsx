import {Link} from 'react-router-dom'
import "./MainNav.css"


const MainNav = () => {


    return(
     <div className='NavDiv'>
            <nav className='Nav'>
                <Link to="/home">
                    <h3 className='homeHeader'>Home </h3> 
                </Link>               
             
                <Link to="/user/:id">
                    <h3 className='UserHeader'>User Profile </h3>
                </Link>
    
                <Link to="/search">            
                    <h3 className='searchHeader'>Search </h3>
                </Link>
           
                <Link to="/signOut">
                    <h3 className='LogOutHeader'>Log Out </h3>
                </Link>
           
                <Link to="/signIn">
                    <h3 className='LogInHeader'>Log In </h3>
                </Link>
                </nav>
            </div>
           
    )
}













export default MainNav;