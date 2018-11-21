import React from 'react';
import { Link, NavLink } from 'react-router-dom';

/* 
    Link and NavLink can prevent Reloading the page!
    NavLink will add class="active" to current active link
    activeClassName will let you change the active class to custom class name
*/

const Nav = () => {

    return (
        <div>
            <Link to="/">Logo</Link>
            <ul>
                <NavLink activeClassName="selected" exact to="/">Home</NavLink>
                <NavLink activeClassName="selected" to="/about">About</NavLink>
                <NavLink activeClassName="selected" to="/blog">Blog</NavLink>
            </ul>
        </div>
    )

}

export default Nav;