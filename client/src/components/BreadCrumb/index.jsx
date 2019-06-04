import React from 'react';
import './BreadCrumb.css'

export default class BreadCrumb extends React.Component {
    render() {
        return (
            <nav className="Link">
                <ul>
                    <li className="Home">
                        <a href='/#' ><img style={{width: 20, height:20}} src={require("../../img/nav/home.svg")} alt=""/></a>
                        <span>/ </span>
                    </li>
                    <li>
                        <a href='/#'>Phim</a>
                        <span>/ </span>
                    </li>
                    <li>
                        <a href='/#'>Phim Đang Chiếu</a>
                        <span>/ </span>
                    </li>
                    <li>
                        <a href='/#'><strong><u>Aladin</u> </strong> </a>
                    </li>
                </ul>
            </nav>
        );
    }
}

