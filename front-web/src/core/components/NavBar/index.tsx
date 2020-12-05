import { getAccessTokenDecoded, logout } from 'core/utils/auth';
import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './styles.scss';

const Navbar = () => {
    const [currentUser, setCurrentUser] = useState('');
    const location = useLocation();
    useEffect(() =>{
        const currentUserData = getAccessTokenDecoded();
        setCurrentUser(currentUserData.user_name);
    },[location])
    const handleLogout = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>{
        event.preventDefault();
        logout();

    }
    return (
        <nav className='row bg-primary main-nav'>
            <div className='col-3'>
                <Link to='/' className='nav-log-text'>
                    <h4>DSCatalog</h4>
                </Link>
            </div>
            <div className="col-6">
                <ul className='main-menu'>
                    <li>
                        <NavLink className='nav-link' to='/' exact>HOME</NavLink>
                    </li>
                    <li>
                        <NavLink className='nav-link' to='/products' >CATÁLOGO</NavLink>
                    </li>
                    <li>
                        <NavLink className='nav-link' to='/admin' >ADMIN</NavLink>
                    </li>
                </ul>
            </div>
            <div className="col-3 text-right">
                {currentUser && (
                    <>
                        {currentUser}
                        <a 
                        href="#logout" 
                        className='nav-link active d-inline'
                        onClick={handleLogout}>
                            LOGOUT
                </a>
                    </>
                )
                }
                {!currentUser && (
                    <Link className='nav-link active' to='/auth/login'>
                        LOGIN
                    </Link>
                )}
            </div>
        </nav>
    );
}

export default Navbar;