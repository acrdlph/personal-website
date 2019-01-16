import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './MenuSection.module.css';

const menuSection = (props) => {
    const items = props.section.items.map(el => {
        return (
            <NavLink
                activeClassName={classes.active}
                to={`${el.link}`}>
                <p>
                    {el.name}
                </p>
            </NavLink>
        )
    })

    return (
        <div>
            <h3>
                {props.section.title.name}
            </h3>
            <div>
                {items}
            </div>
        </div>
    )
}

export default menuSection;