import React from 'react'
import './Menu.css'


export default class Menu extends React.Component {
    render() {
        var menuItemElements = []
        if (this.props.items) {
            menuItemElements = this.props.items.map((mainItem, index1) =>
                <li className="nav-item dropdown" key={index1}>
                    <a className="nav-link dropdown-toggle" href={mainItem.main.href} id="navbardrop" data-toggle="dropdown">{mainItem.main.title}</a>
                    <div className="dropdown-menu">
                        {mainItem.subItems.map((subItem, index2) =>
                            <a key={index2} href={subItem.href} className="dropdown-item"><i>{subItem.title}</i></a>)
                        }
                    </div>
                </li>
            );
        } else {
            menuItemElements = true;
        }

        return (
            <nav className="navbar navbar-expand-sm nav_menu">
                <ul className="navbar-nav">
                    {menuItemElements}
                </ul>
            </nav>

        );
    }
}
