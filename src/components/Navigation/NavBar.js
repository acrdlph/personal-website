import React from 'react';
import classes from './NavBar.module.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faGithub, faMediumM, faTwitter, faAngellist, faVimeoV, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const navBar = (props) => (
    <header className={classes.header}>

        <div className={classes.name}>
            <h1>
                Achill Rudolph
            </h1>
            <div className={classes.name__socials}>
                <a href="https://twitter.com/achillrudolph" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} size='2x' style={{ padding: '5px' }} />
                </a>
                <a href="https://medium.com/@w.a.y" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="" icon={faMediumM} size='2x' style={{ padding: '5px' }} />
                </a>
                <a href="https://github.com/acrdlph" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="" icon={faGithub} size='2x' style={{ padding: '5px' }} />
                </a>
                <a href="https://vimeo.com/user30119670/videos" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="" icon={faVimeoV} size='2x' style={{ padding: '5px' }} />
                </a>
                <a href="https://www.youtube.com/channel/UC-6Vx8ziYpb2siVzL3SuWsQ" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="" icon={faYoutube} size='2x' style={{ padding: '5px' }} />
                </a>
                <a href="https://www.linkedin.com/in/achill-rudolph-24929511b/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="" icon={faLinkedinIn} size='2x' style={{ padding: '5px' }} />
                </a>
            </div>
        </div>

        <div className={classes.bar} />
        <div className={classes.bar} />


        <nav className={classes.nav}>
            <ul className={classes.nav__items}>
                <li className={classes.nav__item}>
                    <NavLink
                        activeClassName={classes.active}
                        to="/about">
                        About Me
                    </NavLink>
                </li>
                <li className={classes.nav__item}>
                    <NavLink
                        activeClassName={classes.active}
                        to="/stories">
                        Storytelling
                    </NavLink>
                </li>
                <li className={classes.nav__item}>
                    <NavLink
                        activeClassName={classes.active}
                        to="/software">
                        Software & Entrepreneurship
                    </NavLink>
                </li>
                <li className={classes.nav__item}>
                    <NavLink
                        activeClassName={classes.active}
                        to="/meet">
                        Meet Me
                    </NavLink>
                </li>
                <li className={classes.nav__item}>
                    <NavLink
                        activeClassName={classes.active}
                        to="/token">
                        Token
                    </NavLink>
                </li>
                <li className={classes.nav__item}>
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