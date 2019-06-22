import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import AxiosInstance, { endPoint } from "utils/api";

class PopUpCity extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: true
        };
    }

    handleClose = () => {
        this.setState({ show: false });
    };

    CloseAndSave = () => {
        this.setState({ show: false });
        this.props.done({
            id: null,
            name: this.refs.nameCity.value
        });
    };

    handleShow() {
        this.setState({ show: true });
    }

    // onChangeInput = (e)=>{
    //     this.setState({
    //         [e.name] = e.
    //     })
    // }

    render() {
        return (
            <Modal
                show={this.state.show}
                onHide={this.handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        {this.props.add
                            ? "Thêm thành phố"
                            : "Thay đổi thông tin"}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="id">
                            <Form.Label>Id</Form.Label>
                            <Form.Control
                                disabled
                                placeholder="Id tự phát sinh"
                                value={this.props.data.id}
                            />
                            <Form.Text className="text-muted">
                                Id phát sinh tự động
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="name_city">
                            <Form.Label>Tên thành phố</Form.Label>
                            <Form.Control
                                placeholder="Nhập tên thành phố"
                                ref="nameCity"
                                onChange
                            />
                            <Form.Text className="text-muted">
                                {this.props.data.name}
                            </Form.Text>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Đóng
                    </Button>
                    <Button variant="primary" onClick={this.CloseAndSave}>
                        {this.props.add ? "THÊM" : "CẬP NHẬT"}
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default PopUpCity;
