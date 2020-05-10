import React from 'react';

const Navbar = (props) => {
    return (
        <header className="app-header">
            <p className="name-user">Hi, <span>{props.user ? props.user.name : null}</span></p>

            <nav className="nav-principal">
                <button className="btn btn-blank" onClick={(e) => props.logout()}>
                    <span className="close">Close session</span>
                </button>
            </nav>
        </header>
    );
}

export default Navbar;