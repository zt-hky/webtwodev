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
                <section className="Content">
                    <section className="Content_Img_Profile">    
                    <center>
                    <form onSubmit={this.onFormSubmit}>
                        <h3> Cập nhật hình ảnh </h3>
                        <input type="file" name="myImage" onChange= {this.onChange} />
                        <button type="submit">Upload</button>
                     </form>
                     </center>
                    </section>
                   <Profile></Profile>
                </section>
            </main>

        );
    }
}
