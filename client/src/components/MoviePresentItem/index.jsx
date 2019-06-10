import React from 'react';
import './MoviePresentItem.scss';
export default class MoviePresentItem extends React.Component {

    constructor(props){
        super(props);
        this.btnChiTiet = this.btnChiTiet.bind(this);
        this.btnMuaVe = this.btnMuaVe.bind(this);


    }

    btnChiTiet(){
        alert("chi tiet")
    }
    btnMuaVe(){
        alert("mua ve")
    }

    render() {
        return (
            <article className="Present_Film">
                <section className="Present_Film_Detail">
                    <img src="../img/film1.svg" alt="" />
                    <section className="Present_Film_Detail_Item">
                        <button onClick={this.btnChiTiet}>Chi Tiết</button>
                        <button onClick={this.btnMuaVe}>Mua vé</button>
                    </section>
                </section>
                <h4>DRAGON BALL</h4>
            </article>
        );
    }
}
