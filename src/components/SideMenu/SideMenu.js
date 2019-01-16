import React from 'react';
import MenuSection from './MenuSection/MenuSection';





const sideMenu = (props) => {
    console.log(props.items)
    const items = props.items.map(el => {
        return (
            <MenuSection section={el}/>
        )
    })
    return (
        <div>
            {items}
        </div>

    )
}

export default sideMenu;