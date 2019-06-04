import React from 'react'
import './Seat.css'
export default class Seat extends React.Component {
    render() {
        return (
            <main>
                <section className="container Main">
                    <aside className="Main_Info">
                        <img src={require("../img/seat_film.svg")} alt />
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
                    <section className="Main_Seat">
                        <h3>Chọn ghế</h3>
                        <section className="Main_Seat_Content">
                            <section className="Main_Seat_Content_Note">
                                <article className="Main_Seat_Content_Note_Selected">
                                    <span />
                                    <p>Ghế bạn chọn</p>
                                </article>
                                <article className="Main_Seat_Content_Note_Available">
                                    <span />
                                    <p>Ghế trống</p>
                                </article>
                                <article className="Main_Seat_Content_Note_Block">
                                    <span />
                                    <p>Ghế đã bán</p>
                                </article>
                            </section>
                            <section className="Main_Seat_Content_Map">
                                <section className="Main_Seat_Content_Map_Column">
                                    <ul>
                                        <li>A</li>
                                        <li>B</li>
                                        <li>C</li>
                                        <li>D</li>
                                        <li>E</li>
                                        <li>F</li>
                                        <li>G</li>
                                        <li>H</li>
                                        <li>J</li>
                                        <li>K</li>
                                    </ul>
                                </section>
                                <section className="Main_Seat_Content_Map_State">
                                    <h3>Màn hình</h3>
                                    <ul>
                                        <li className="Available"><span /></li>
                                        <li className="Block"><span /></li>
                                        <li className="Block"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Selected"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Selected"><span /></li>
                                        <li className="Block"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Selected"><span /></li>
                                    </ul>
                                    <ul>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                    </ul>
                                    <ul>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                    </ul>
                                    <ul>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                    </ul>
                                    <ul>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                    </ul>
                                    <ul>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                    </ul>
                                    <ul>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                    </ul>
                                    <ul>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                    </ul>
                                    <ul>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                    </ul>
                                    <ul>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                        <li className="Available"><span /></li>
                                    </ul>
                                </section>
                            </section>
                        </section>
                    </section>
                </section>
            </main>

        );
    }
}