import React from 'react';
import './Header.css'
import { Link, Outlet, useNavigation } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
import NotFound from '../NotFound/NotFound';
const Header = () => {
    const navigateLoading = useNavigation();
    
    return (
        <div>
        <nav className='navBar'>
            <a className='CareerProspects' href="/"><h2>CareerProspects</h2></a>
            <div className='Links'>
                <ActiveLink to="/statistics" className="LinkColor">Statistics</ActiveLink>
                <ActiveLink to="/applied" className="LinkColor">Applied Jobs</ActiveLink>
                <ActiveLink to="/Blog" className="LinkColor">Blog</ActiveLink>
            </div>
            <button className='btn-startApply'>Start Applying</button>
        </nav>
        {navigateLoading.state === 'loading' && <NotFound></NotFound>}
        <Outlet></Outlet>
        </div>
    );
};

export default Header;