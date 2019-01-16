import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import classes from './MenuItems.module.css'

const menuItems = (props) => { 
    const items = props.items.map(el => {
        return (
            <NavLink
                activeClassName={classes.active}
                to={`${props.match.url}/${props.title.toLowerCase()}/${el.link}`}>
                <p>
                    {el.name}
                </p>
            </NavLink>
        )
    })
    console.log(props)
    return (
        <div>
            <div>
                {items}
            </div>
        </div>
    )
}

export default withRouter(menuItems);

