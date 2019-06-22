import React from "react";
import { Button, Form, Input } from "react-bootstrap";

import AxiosInstance, { endPoint } from "utils/api";

class FromFilm extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            genre: [],
            success: false
        };
    }

    componentDidMount() {
        AxiosInstance.get("apiAdmin/GenreFilms", {
            params: { viewdel: "all", order: "id" }
        }).then(res => {
            this.setState({
                genre: res.data.data
            });
            console.log(this.state.genre);
        });
    }

    handleFile = e => {
        let file = e.target.files[0];

        this.setState({
            file
        });
    };

    ListOption = () => {
        console.log(this.state.genre);
        const data = this.state.genre;
        return data.map(item => {
            return <option value={item.id}>{item.name}</option>;
        });
    };

    render() {
        return (
            <div>
                <h1>Thêm Film</h1>
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Tên phim</Form.Label>
                        <Form.Control
                            placeholder="Tên phim"
                            ref="name"
                        />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Thể loại</Form.Label>
                        <Form.Control as="select" ref="genre">
                            {this.ListOption()}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Mô tả</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows="3"
                            ref="content"
                            placeholder="Mô tả phim"
                        />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Studio</Form.Label>
                        <Form.Control
                            placeholder="Nhà sản xuất"
                            ref="studio"
                        />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Trailer</Form.Label>
                        <Form.Control
                            placeholder="Trailer"
                            ref="trailer"
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label bsStyle="success">
                            Add file
                        </Form.Label>

                        <Form.Control
                            ref={ref => (this.fileUpload = ref)}
                            id="fileUpload"
                            type="file"
                        />
                    </Form.Group>
                </Form>

                <Button variant="success">Thêm</Button>
            </div>
        );
    }
}

export default FromFilm;
