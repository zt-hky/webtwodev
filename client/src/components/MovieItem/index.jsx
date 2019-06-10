import React from 'react'
import { Link } from 'react-router-dom';
import './MovieItem.scss'
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
        //alert("Go to movie detail page!");

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
                    <Link className="link" to={"/chi-tiet/" + this.props.movieId} > <button>Chi tiết</button></Link>
                    <Link className="link" to={"/mua-ve/"}><button>Mua vé</button></Link>
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