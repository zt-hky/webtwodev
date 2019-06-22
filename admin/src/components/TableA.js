import React from "react";

import Table from "react-bootstrap/Table";

class TableA extends React.Component {
    ListItem = () => {
        const data = this.props.data;
        return data.map(item => {
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.DoanhThu ? item.DoanhThu : 0}</td>
                    <td>{item.SoVe ? item.SoVe : 0}</td>
                </tr>
            );
        });
    };

    render() {
        return (
            <Table responsive striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#ID</th>
                        <th>Tên Cụm Rạp</th>

                        <th>Doanh thu</th>
                        <th>Số ghế bán được</th>
                    </tr>
                </thead>
                <tbody>{this.ListItem()}</tbody>
            </Table>
        );
    }
}

export default TableA;
