import React from "react";
import { Link } from "react-router-dom";

function NotFound404 (){
    
    return(
    <>
        <nav>
            <Link to='/'>Home</Link><br />
            <Link to='/contacts'>Contacts</Link>
        </nav> 
    <h1>404</h1>
    </>    
    );
}

export default NotFound404;