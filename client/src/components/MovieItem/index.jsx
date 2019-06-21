import React from 'react'
import { Link } from 'react-router-dom';
import './MovieItem.scss'
import { IMG_PLACEHOLDER, defaultValue, BASE_URL_IMAGE } from '../../utils/constants';
import { bindActionCreators } from 'redux';
import ActionCreator from '../../actions';
import { connect } from 'react-redux';
class MovieItem extends React.Component {

    constructor(props) {
        super(props);
        this.btnChiTiet_CLick = this.btnChiTiet_CLick.bind(this);
        this.btnMuaVe_CLick = this.btnMuaVe_CLick.bind(this);
        this.state = { loadImgError: false }
    }



    btnChiTiet_CLick(e) {
        // alert("Go to buy ticket page!");
    }

    btnMuaVe_CLick(e) {
        //alert("Go to movie detail page!");

    }


    img_onError = () => {

        this.setState({ loadImgError: true })
    }

    render() {
        return (
            <article className="ListFilm_Item">
                <img onError={this.img_onError} src={this.state.loadImgError ? IMG_PLACEHOLDER : BASE_URL_IMAGE + this.props.imgUrl} alt={defaultValue} />
                <section className="ListFilm_Item_Button">
                    <Link className="link" to={`/chi-tiet/${this.props.movieId}`} > <button>Chi tiết</button></Link>
                    <Link onClick={() => {
                        this.props.cleanProps({})
                    }} className="link" to={`/mua-ve/${this.props.movieId}`}><button>Mua vé</button></Link>
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
const mapStateToProps = (state) => {
    return state.movie;
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        cleanProps: ActionCreator.MovieActions.cleanProps
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(MovieItem)