import '../styles/Menu.css';

import MenuItem from '../components/MenuItem/MenuItem.component';
import {MenuList} from '../helpers/MenuList';
import React from 'react';

function Menu() {
    return (
        <div className='menu'>
            <h1 className='menuTitle'>Our Menu</h1>
            <div className='menuList'>
                {MenuList.map((menuItem, key) => {
                    return (
                        <MenuItem
                            key={key}
                            image={menuItem.image}
                            name={menuItem.name}
                            price={menuItem.price}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Menu;
