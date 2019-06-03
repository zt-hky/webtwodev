import React from 'react'
import './Menu.css'

export default class Menu extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm nav_menu">
                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="https:\\fb.com" id="navbardrop" data-toggle="dropdown">PHIM</a>
                        <div className="dropdown-menu">
                            <a href className="dropdown-item"><i> PHIM ĐANG CHIẾU</i></a>
                            <a href className="dropdown-item"><i> PHIM SẮP CHIẾU</i></a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https:\\fb.com">RẠP/GIÁ VÉ</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https:\\fb.com">MUA VÉ</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https:\\fb.com">THÀNH VIÊN</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https:\\fb.com">SỰ KIỆN</a>
                    </li>
                </ul>
            </nav>

        );
    }
}
