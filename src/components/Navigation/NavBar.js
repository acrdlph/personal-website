import React from 'react';
import classes from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

const navBar = (props) => (
    <header className={classes['main-header']}>

        <div>
            <h1>
                Achill Rudolph
      </h1>
        </div>

        <nav className={classes['main-nav']}>
            <ul className={classes['main-nav__items']}>
                <li className={classes['main-nav__item']}>
                    <NavLink
                        activeClassName={classes.active}
                        to="/about">
                        About Me
                    </NavLink>
                </li>
                <li className={classes['main-nav__item']}>
                    <NavLink
                        activeClassName={classes.active}
                        to="/stories">
                        Storytelling
                    </NavLink>
                </li>
                <li className={classes['main-nav__item']}>
                    <NavLink 
                        activeClassName={classes.active} 
                        to="/software">
                        Software & Entrepreneurship
                    </NavLink>
                </li>
                <li className={classes['main-nav__item']}>
                    <NavLink 
                        activeClassName={classes.active} 
                        to="/meet">
                        Meet Me
                    </NavLink>
                </li>
                <li className={classes['main-nav__item']}>
                    <NavLink 
                        activeClassName={classes.active} 
                        to="/token">
                        Token
                    </NavLink>
                </li>
                <li className={classes['main-nav__item']}>
                    <NavLink 
                        activeClassName={classes.active} 
                        to="/wall">
                        Wall
                    </NavLink>
                </li>
            </ul>
        </nav>
    </header>

)

export default navBar;