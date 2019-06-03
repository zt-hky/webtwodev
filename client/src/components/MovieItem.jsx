import React from 'react'
import './MovieItem.css'

export default class Menu extends React.Component {

    render() {
        return (
            <article className="ListFilm_Item">
                <img src={this.props.imgUrl} alt ="#"/>
                <section className="ListFilm_Item_Button">
                    <button>Chi Tiết</button>
                    <button>Mua vé</button>
                </section>
                <section className="ListFilm_Item_Info">
                    <h4>{this.props.title}</h4>
                    <div>Thể loại: đang test thử đây này</div>
                    <div>Thời Lượng: {this.props.duration} phút</div>
                    <div>Khởi Chiếu: {this.props.debut}</div>
                </section>
            </article>

        );
    }
}
