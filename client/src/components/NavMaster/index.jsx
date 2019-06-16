import React from 'react'
import { Link } from 'react-router-dom';
import './NavMaster.scss';
export default class NavMaster extends React.Component {
    render() {
        return (
            <nav className="nav_master">
                <section className="nav_master_sec">
                    <img src="../img/Star.svg" alt="#" />
                    <h1>{this.props.brandName}</h1>
                </section>
                <nav className="navbar navbar-expand-sm  nav_master_nav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/trang-chu">Trang chủ</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/dang-nhap">Đăng nhập</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/dang-ky">Đăng ký</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/trang-ca-nhan">Trang Cá Nhân </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/logout"> Đăng Xuất </Link>
                        </li>

                    </ul>
                </nav>
            </nav>
            

        );
    }
}