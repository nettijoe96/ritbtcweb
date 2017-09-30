import React, { Component } from 'react';
import './index.css';
import colors from 'colors.json'

import navItems from 'contents/navItems.json'
import NavItem from 'components/NavItem'

class Navbar extends Component {
    render() {
        const navItemsItems = navItems.items.map(({href, text})=>{
            return(
                <NavItem key={text}>
                    <a href={href}>
                        <span>{text}</span>
                    </a>
                </NavItem>
            );
        });
        return (
            <div className="Navbar" style={{
            backgroundColor:colors.dark.off
            }}>
                {navItemsItems}
            </div>
        );
    }
}
export default Navbar;
