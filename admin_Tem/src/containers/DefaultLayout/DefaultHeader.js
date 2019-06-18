import React, { Component } from 'react';
import { Link, NavLink,Redirect } from 'react-router-dom';
import { Badge, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/logo.png'
import sygnet from '../../assets/img/brand/sygnet.svg'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
constructor(props) {
  super(props)
  this.state = {
    isLogout : false
  }
}

  logout = () =>{
      localStorage.removeItem('token');
     this.setState({isLogout: true})
  }

  goToHome = ()=>{
    if(this.state.isLogout){
      return <Redirect to="/login"></Redirect>
    }
  }

  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;
   
  
    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, width: 89, height: 25, alt: 'CoreUI Logo' }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />

        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink to="/dashboard" className="nav-link" >Thống kê</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <Link to="/users" className="nav-link">Tài khoản</Link>
          </NavItem>
         
        </Nav>
        <Nav className="ml-auto" navbar>
      
          <AppHeaderDropdown direction="down">
            <DropdownToggle nav>
              <img src={'../../assets/img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
            </DropdownToggle>
            <DropdownMenu right style={{ right: 'auto' }}>
              <DropdownItem header tag="div" className="text-center"><strong>Settings</strong></DropdownItem>
              <DropdownItem><i className="fa fa-user"></i> Trang cá nhân</DropdownItem>
              <DropdownItem><i className="fa fa-wrench"></i> Cài đặt</DropdownItem>
              <DropdownItem><i className="fa fa-usd"></i> Thanh Toán<Badge color="secondary">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-file"></i> Lịch sử xử lí<Badge color="primary">42</Badge></DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={this.logout}><i className="fa fa-lock"></i> Logout</DropdownItem>
            </DropdownMenu>
          </AppHeaderDropdown>
        </Nav>
  {this.goToHome()}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
