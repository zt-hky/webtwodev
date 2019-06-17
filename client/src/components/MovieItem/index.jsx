import React from 'react'
import { Link } from 'react-router-dom';
import './MovieItem.scss'
import { defaultValue } from '../../utils/constants';
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
        return (
            <article className="ListFilm_Item">

                <img src={this.props.imgUrl} alt={defaultValue} />
                <section className="ListFilm_Item_Button">
                    <Link className="link" to={"/chi-tiet/" + this.props.movieId} > <button>Chi tiết</button></Link>
                    <Link className="link" to={"/mua-ve/"}><button>Mua vé</button></Link>
                </section>
                <section className="ListFilm_Item_Info">
                    <h4>{this.props.title ? this.props.title : defaultValue}</h4>
                    <div>Thể loại: {this.props.genre ? this.props.genre : defaultValue}</div>
                    <div>Thời Lượng: {this.props.duration ? this.props.duration : defaultValue} phút</div>
                    <div>Khởi Chiếu: {this.props.debut ? this.props.debut : defaultValue}</div>
                </section>
            </article>

        );
    }
}