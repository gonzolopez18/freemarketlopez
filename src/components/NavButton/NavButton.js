import React from 'react';

const NavButton = ({label}) => {
    return (
        <button className="nav-item btn btn-light" type="button" >{label}</button>
    );
}

export default NavButton;