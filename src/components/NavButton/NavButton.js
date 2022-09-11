<<<<<<< HEAD
import React from 'react';

const NavButton = ({label}) => {
    return (
        <button className="nav-item btn btn-light" type="button" >{label}</button>
=======
import { Link} from 'react-router-dom';

const NavButton = ({label}) => {
    return (
        <Link to={`/category/${label}`} className="nav-item btn btn-light" type="button" >{label}</Link>
>>>>>>> develop
    );
}

export default NavButton;