import React from 'react';

export default class ComboBooking extends React.Component {
    render() {
        return (
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
                            <td><img src={require("../img/comboo.png")} alt /><label htmlFor>Combo 1</label> </td>
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

        );
    }
}