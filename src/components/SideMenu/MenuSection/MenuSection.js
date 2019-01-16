import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import MenuItems from './MenuItems/MenuItems';

const menuSection = (props) => {
    console.log(props)
    return (
        <div>
            <h3>
                {props.section.title.name}
            </h3>
            <MenuItems 
                items={props.section.items} 
                title={props.section.title.name}/>
        </div>
    )
}

export default withRouter(menuSection);