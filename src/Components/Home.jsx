import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux/es/exports';
import { toggleAuth } from '../Redux/Login/action';
import { Link } from 'react-router-dom';
 

function Home()
{
    const isLoggedIn = useSelector(store => store.isLoggedIn);
    const dispatch = useDispatch();
  
    // const handleButton=()=>{
    //     return(
    //         Navigate("/blogs")
    //     )
    
    // }
   
    
    const handleLogout = () => {
        dispatch(toggleAuth());
    }

    return(
        <div>
            {/* <button onClick={handleButton}>Go to Blogs Listing</button> */}
            <Link to="/blogs">Go to Blogs Listing</Link>


          {
            !isLoggedIn ? (<Link style={{color:'blue',textDecoration:'none'}} to="/login">Login</Link>) : <button style={{border:'none',fontSize:'16px', cursor:'pointer',color:'blue'}} onClick={handleLogout}>Logout</button>
        } 
                </div>
        
    )
}
export default Home