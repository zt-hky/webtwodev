import React from 'react';
import './ProfileUser.scss';
import Profile from '../components/Profile';
export default class ProfileUser extends React.Component {
    onChange(e) {
        this.setState({file:e.target.files[0]});
    }
    render() {
        return (
            <main>
             <div
                style={{
                    marginTop: '20px',
                    display: 'flex',
                    justifyContent: 'center',
                    height: 'auto'
                }}>
               <Profile></Profile>
               </div>
            </main>

        );
    }
}
