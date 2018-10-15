import React from 'react'
import { NavLink} from 'react-router-dom'
const Header = () => (
    <div>
        <h1>Portfolio</h1>
        <div className="spacer">
            <NavLink to="/" activeClassName="is-active">Home</NavLink>
            <NavLink to="/portfolio" activeClassName="is-active">Portfolio</NavLink>
            <NavLink to="/contact" activeClassName="is-active">Contact</NavLink>
        </div>
    </div>
);
export default Header;
