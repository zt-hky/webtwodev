import React from 'react'
import './MovieInfo.css'

export default class MovieInfo extends React.Component {
    render() {
        return (
            <aside className="Main_Info">
                <img src={require("../../img/seat_film.svg")} alt />
                <section className="Main_Info_Detail">
                    <h3>ALADIN</h3>
                    <section>
                        <ul>
                            <li>Rạp: Nguyễn Du</li>
                            <li>Suất chiếu: 22:15 Thứ năm, 30/5/2019</li>
                            <li>Phòng Chiếu: </li>
                            <li>Ghế: A1, B1, C1, D1, E1, G1, T1, H1, Y1, V1, S1 </li>
                            <li>Tổng: </li>
                        </ul>
                    </section>
                    <button>Tiếp Tục</button>
                </section>
            </aside>
        );
    }
}