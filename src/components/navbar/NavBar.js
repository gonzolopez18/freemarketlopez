import React from 'react';
import NavButton from '../NavButton/NavButton';
import CartWidget from '../CartWidget/CartWidget';


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container fluid">
                <a className="navbar-brand" href="www.google.com">Free Market</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <NavButton label="Cascos"/>
                    <NavButton label="Indumentaria"/>
                    <NavButton label="Calzado"/>
                    <NavButton label="Accesorios"/>
                </div>
                <CartWidget />
            </div>
        </nav>
    );    
}

export default NavBar;