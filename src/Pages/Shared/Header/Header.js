import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Header = () => {

    const { user, signOutUser } = useContext(AuthContext);

    return (
        <div className="navbar bg-primary text-primary-content">
            <div className="flex-1">
                <Link className="btn btn-ghost normal-case text-xl">Pepperoni</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/services'>Services</Link></li>
                    <li><Link to='/blogs'>Blogs</Link></li>
                    {
                        user?.uid ?
                            <>
                                <li><Link to='/add-service'>Add Service</Link></li>
                                <li><Link to='/my-reviews'>My Reviews</Link></li>
                                <li><Link onClick={signOutUser}>Log Out</Link></li>
                            </>
                            :
                            <>
                                <li><Link to='/login'>Login</Link></li>
                                <li><Link to='/register'>Register</Link></li>
                            </>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Header;