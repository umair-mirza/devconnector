import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from '../../actions/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = ({auth: {isAuthenticated, loading}, logout}) => {

    const authLinks = (
        <ul>
            <li><Link to="/profiles">
            <span className="hide-sm">Developers</span></Link></li>
            <li><Link to="/posts">
            <span className="hide-sm">Posts</span></Link></li>
            <li><Link to="/dashboard"><FontAwesomeIcon icon={['fas', 'user']} />{' '}
            <span className="hide-sm">Dashboard</span></Link></li>
            <li><a onClick={logout} href="#!"><FontAwesomeIcon icon={['fas', 'sign-out-alt']} />{' '}
            <span className="hide-sm">Logout</span></a></li>
        </ul>
    );
    
    const guestLinks = (
        <ul>
            <li><Link to="/profiles">
            <span className="hide-sm">Developers</span></Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
    );

    return(
            <nav className="navbar bg-dark">
                <h1>
                    <Link to="/"><FontAwesomeIcon icon={['fas', 'code']} /> DevConnector</Link>
                </h1>
    {!loading && (<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>)}
            </nav>
    );
};

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, {logout})(Navbar);