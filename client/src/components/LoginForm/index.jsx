import React from 'react';
import './LoginForm.scss'
export default class LoginForm extends React.Component{
    render(){
        return(
            <section className="Content_Form">
            <h3>ĐĂNG NHẬP</h3>
            <section className="Content_Form_Info">
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password" />
            </section>
            <button>đăng nhập</button>
            <section className="Content_Form_Check">
                <input id="check" type="checkbox" />
                <label htmlFor="check">duy trì đăng nhập</label>
            </section>
        </section>
        );
    }
}