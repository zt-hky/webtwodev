import React from 'react';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import './MovieDetail.scss'
import { IMG_PLACEHOLDER, BASE_URL_IMAGE, } from '../../utils/constants';

export default class MovieDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = { loadImgError: false }
    }



    img_onError = () => {
        this.setState({ loadImgError: true })
    }

    render() {
        return (
            <header className="Current">
                {this.props.movieItem ?
                    <header className="Current">
                        <section className="Current_Img">
                            <img onError={this.img_onError} src={this.state.loadImgError? IMG_PLACEHOLDER: BASE_URL_IMAGE+this.props.movieItem.poster} alt="ahihi" />
                        </section>
                        <section className="Current_Info">
                            <h1>{this.props.movieItem.name}</h1>
                            <section className="Current_Info_Detail">
                                <article><b>Thời lượng: </b> {this.props.movieItem.duration} Phút</article>
                                <article><b>Thể loại: </b>{this.props.movieItem.GenreFilm.name}</article>
                                <article><b>Quốc gia: </b>{this.props.movieItem.studio}</article>
                                <article><b>Đạo diễn:</b> Guy Ritchie</article>
                                <article><b>Ngày:</b> {this.props.movieItem.release}</article>
                                <article className="Current_Info_Detail_Voting">
                                    <p><b>Đánh giá: </b></p>
                                    <Rater style={{ marginLeft: 10 }} total={5} rating={0} />

                                </article>
                            </section>
                            <section className="Current_Info_Des">
                                <h3>Nội dung:</h3>
                                <p>{this.props.movieItem.content}</p>
                            </section>
                            <button onclick="window.location.href = '#';" > MUA VÉ </button>
                        </section>

                    </header> : <h1>ĐANG CẬP NHẬT</h1>}

            </header>
        );
    }
}