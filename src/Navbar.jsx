import React from "react";
import {Link, NavLink} from "react-router-dom"

const Navbar = (() =>{

    return(
        <div>
            <nav>
                <Link to='/'>Fooldal</Link>
                <NavLink to='/ermesek'>Az olimpia ermesei</NavLink>
                <NavLink to='/mermesek'>A magyar ermesek</NavLink>
            </nav>
        </div>
    )

})

export default Navbar