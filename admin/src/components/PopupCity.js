import React from "react";
import { Modal, Button } from "react-bootstrap";
import AxiosInstance, { endPoint } from "utils/api";

class PopUpCity extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: this.props.show
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    CloseAndSave = () => {
        this.setState({ show: false });
        this.props.done();
    };

    handleShow() {
        this.setState({ show: true });
    }

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
                <Modal.Body />
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
