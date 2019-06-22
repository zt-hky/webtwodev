import React from "react";
import { Button, Image } from "react-bootstrap";

import Table from "react-bootstrap/Table";

class TableFilm extends React.Component {
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
                    <td>{item.name}</td>
                    <td>
                        <Image
                            src={"http://localhost:5000/images/" + item.poster}
                            rounded
                        />
                    </td>
                    <td>{item.content}</td>
                    <td>{item.release}</td>
                    <td>{item.studio}</td>
                    <td>{item.GenreFilm.name}</td>
                    <td>{item.delete ? "Đã xóa" : "Tồn tại"}</td>

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
                        <th>Tên</th>
                        <th>Ảnh Poster</th>

                        <th>Mô tả</th>
                        <th>Ngày công chiếu</th>
                        <th>Studio</th>
                        <th>Thể loại</th>
                        <th>Trạng thái</th>
                    </tr>
                </thead>
                <tbody>{this.ListItem()}</tbody>
            </Table>
        );
    }
}

export default TableFilm;
