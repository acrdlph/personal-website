import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import MenuItems from './MenuItems/MenuItems';

const menuSection = (props) => {
    console.log(props)
    const underline = props.section.title.name === "Backstage";
    return (
        <div>
            <h3 style={underline ? {textDecoration: 'underline', textDecorationStyle: 'double', color: '#2424d0'} : null}>
                {props.section.title.name}
            </h3>
            <MenuItems 
                items={props.section.items} 
                title={props.section.title.name}/>
        </div>
    )
}

export default withRouter(menuSection);