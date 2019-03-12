import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import MenuItems from './MenuItems/MenuItems';

const menuSection = (props) => {
    const underline = props.section.title.name === "Backstage";
    return (
        <div style={{width: '250px'}}>
            <NavLink
                // activeClassName={classes.active}
                to={`${props.match.url}/${props.section.title.titleLink.toLowerCase()}`}>
            <h3 style={underline ? {textDecoration: 'underline', textDecorationStyle: 'double', color: '#2424d0'} : null}>
                {props.section.title.name}
            </h3>
            </NavLink>
            <MenuItems 
                items={props.section.items} 
                title={props.section.title.titleLink}/>
        </div>
    )
}

export default withRouter(menuSection);