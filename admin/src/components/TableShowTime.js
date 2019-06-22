import React from "react";
import { Button } from "react-bootstrap";

import Table from "react-bootstrap/Table";

class TableShowTime extends React.Component {
    constructor(props) {
        super(props);
    }

    delItem = id => {
        this.props.delItem(id);
    };

    handleUpdate = data => {
        console.log("Update");
        this.props.update(data);
    };

    ListItem = () => {
        const data = this.props.data;
        return data.map(item => {
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.Film.name}</td>
                    <td>{item.time}</td>
                    <td>{item.date}</td>
                    <td>{item.Threatre.name}</td>
                    <td>{item.Threatre.ThreatreSet.name}</td>
                    <td>{item.delete ? "Đã xóa" : "Tồn tại"}</td>
                    <td>{item.createdAt}</td>
                    <td>{item.updatedAt}</td>

                    <td>
                        {item.delete ? (
                            <Button
                                variant="outline-info"
                                onClick={e => this.delItem(item.id)}
                            >
                                Khôi phục
                            </Button>
                        ) : (
                            <Button
                                variant="outline-warning"
                                onClick={e => this.delItem(item.id)}
                            >
                                Xóa
                            </Button>
                        )}
                    </td>
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
                        <th>Phim</th>
                        <th>Thời gian</th>

                        <th>Ngày</th>
                        <th>Rạp</th>
                        <th>Cụm rạp</th>
                        <th>Trạng thái</th>
                        <th>Thời gian tạo</th>
                        <th>Thời gian cập nhật</th>
                    </tr>
                </thead>
                <tbody>{this.ListItem()}</tbody>
            </Table>
        );
    }
}

export default TableShowTime;
