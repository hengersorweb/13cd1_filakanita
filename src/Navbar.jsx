import React from "react";
import {Link, NavLink} from "react-router-dom"


const Navbar = (() =>{

    return(
        <div>
            <nav className="bt bb tc mw7 center mt4">
                <Link className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" to='/'>Főoldal</Link>
                <NavLink className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" to='/ermesek'>Pilipócs</NavLink>
                <NavLink className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" to='/mermesek'>A magyar ermesek</NavLink>
            </nav>


        </div>
    )

})

export default Navbar