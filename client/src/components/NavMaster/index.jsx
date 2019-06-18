import React from 'react'
import { Link, Redirect } from 'react-router-dom';
import './NavMaster.scss';
export default class NavMaster extends React.Component {

    constructor(props) {
        super(props);
        this.state = { goToSignIn: false }
    }
    goToSignIn = () => {
        if (this.state.goToSignIn) {
            return <Redirect to='/dang-nhap'></Redirect>
        }
    }
    
    componentDidUpdate = ()=>{
        console.log('componentDidUpdate')
    }
    

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
                        {localStorage.getItem('token') ? null :
                            <li className="nav-item">
                                <Link className="nav-link" to="/dang-nhap">Đăng nhập</Link>
                            </li>}
                        {localStorage.getItem('token') ? null :
                            <li className="nav-item">
                                <Link className="nav-link" to="/dang-ky">Đăng ký</Link>
                            </li>}
                        {localStorage.getItem('token') ?
                            <li className="nav-item">
                                <Link className="nav-link" to="/trang-ca-nhan">Trang Cá Nhân </Link>
                            </li> : null}
                        {localStorage.getItem('token') ?
                            <li className="nav-item">
                                <Link className="nav-link" to="/dang-xuat" onClick={() => {
                                    localStorage.removeItem('token')
                                    this.setState({goToSignIn: true})
                                }}> Đăng Xuất </Link>
                            </li> : null}
                        {this.goToSignIn()}
                    </ul>
                </nav>
            </nav>


        );
    }
}