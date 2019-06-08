import React from 'react'
import './MovieItem.css'
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class MovieItem extends React.Component {

    constructor(props) {
        super(props);
        this.btnChiTiet_CLick = this.btnChiTiet_CLick.bind(this);
        this.btnMuaVe_CLick = this.btnMuaVe_CLick.bind(this);
    }

    componentDidMount() {

       
    }

    btnChiTiet_CLick(e) {
        // alert("Go to buy ticket page!");
    }

    btnMuaVe_CLick(e) {
        alert("Go to movie detail page!");

    }


    render() {
        var genreElements = "";
        if (this.props.genres) {
            this.props.genres.forEach((item, index) => {
                genreElements += (index !== this.props.genres.length - 1) ? item + ", " : item;
            });
        } else {
            genreElements = "Đang cập nhật"
        }



        return (
            <article className="ListFilm_Item">
                <img src={this.props.imgUrl} alt="#" />
                <section className="ListFilm_Item_Button">
                    <button onClick={this.btnChiTiet_CLick}><Link to={"/chi-tiet/" + this.props.movieId} >Chi Tiết</Link></button>
                    <button onClick={this.btnMuaVe_CLick} >Mua vé</button>
                </section>
                <section className="ListFilm_Item_Info">
                    <h4>{this.props.title}</h4>
                    <div>Thể loại: {genreElements}</div>
                    <div>Thời Lượng: {this.props.duration} phút</div>
                    <div>Khởi Chiếu: {this.props.debut}</div>
                </section>
            </article>

        );
    }
}