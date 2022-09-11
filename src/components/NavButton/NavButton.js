import { Link} from 'react-router-dom';

const NavButton = ({label}) => {
    return (
        <Link to={`/category/${label}`} className="nav-item btn btn-light" type="button" >{label}</Link>
    );
}

export default NavButton;