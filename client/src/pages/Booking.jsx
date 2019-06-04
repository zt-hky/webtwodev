import React from 'react'
import './Booking.css'

export default class Booking extends React.Component {

    render() {
        return (
            <main>
                <h1>CHƯA CẮT COMPONENTS</h1>
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
                    <section className="Main_Booking">
                        <h3>LOẠI VÉ - COMBO</h3>
                        <section className="Main_Booking_Info">
                            <article className="Main_Booking_Info-All Main_Booking_Info_Ticket">
                                <h4>Vé</h4>
                                <table>
                                    <thead>
                                        <tr className="Main_Booking_Info-All-Menu ">
                                            <td className="type">Loại</td>
                                            <td className="Number">Số Lượng</td>
                                            <td className="Price">Giá</td>
                                            <td className="Sum">Tổng Tiền</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>2D</td>
                                            <td><input type="number" /></td>
                                            <td>70.0000</td>
                                            <td>140.000</td>
                                        </tr>
                                        <tr>
                                            <td>3D</td>
                                            <td><input type="number" /></td>
                                            <td>90.000</td>
                                            <td>270.000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </article>
                            <article className="Main_Booking_Info-All Main_Booking_Info_Combo">
                                <h4>Combo</h4>
                                <table>
                                    <thead>
                                        <tr className="Main_Booking_Info-All-Menu ">
                                            <td className="type">Combo</td>
                                            <td className="Number">Số Lượng</td>
                                            <td className="Price">Giá</td>
                                            <td className="Sum">Tổng Tiền</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><img src= {require("../img/comboo.png")} alt /><label htmlFor>Combo 1</label> </td>
                                            <td><input type="number" /></td>
                                            <td>70.0000</td>
                                            <td>140.000</td>
                                        </tr>
                                        <tr>
                                            <td><img src={require("../img/comboo.png")} alt /><label htmlFor>Combo 2</label></td>
                                            <td><input type="number" /></td>
                                            <td>90.000</td>
                                            <td>270.000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </article>
                        </section>
                    </section>
                </section>
            </main>

        );
    }
}