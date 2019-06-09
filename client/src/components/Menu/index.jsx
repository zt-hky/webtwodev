import React from 'react'
import './Menu.css'
import {Link} from 'react-router-dom';


export default class Menu extends React.Component {
    render() {
        var menuItemElements = []
        if (this.props.items) {
            menuItemElements = this.props.items.map((mainItem, index1) =>
                <li className="nav-item dropdown" key={index1}>
                    <Link className="nav-link dropdown-toggle" to={mainItem.main.href} id="navbardrop" data-toggle="dropdown">{mainItem.main.title}</Link>
                    <div className="dropdown-menu">
                        {mainItem.subItems.map((subItem, index2) =>
                            <Link key={index2} to={subItem.href} className="dropdown-item"><i>{subItem.title}</i></Link>)
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
