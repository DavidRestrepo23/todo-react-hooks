import React from 'react';

const Navbar = () => {
    return ( 
        <header className="app-header">
            <p className="name-user">Hi <span>David Restrepo</span></p>

            <nav className="nav-principal">
                <a href="#!">Close session</a>
            </nav>
        </header>
     );
}
 
export default Navbar;