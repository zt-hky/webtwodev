import React from 'react'
import './NavMaster.css'

export default class NavMaster extends React.Component {
    render() {
        return (
            <nav className="nav_master">
                <section className="nav_master_sec">
                    <img src="../img/Star.svg" alt ="#"/>
                    <h1>{this.props.brandName}</h1>
                </section>
                <nav className="navbar navbar-expand-sm  nav_master_nav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="https:\\fb.com">Trang chủ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https:\\fb.com">Đăng nhập</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https:\\fb.com">Đăng ký</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https:\\fb.com">Liên hệ</a>
                        </li>
                    </ul>
                </nav>
            </nav>

        );
    }
}