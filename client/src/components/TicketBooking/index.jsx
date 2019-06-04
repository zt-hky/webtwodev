import React from 'react';
export default class TicketBooking extends React.Component{
    render(){
        return(
            <article className="Main_Booking_Info-All Main_Booking_Info_Ticket">
            <h4>Vé</h4>
            <table>
                <thead>
                    <tr className="Main_Booking_Info-All-Menu">
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
 
        );
    }
}