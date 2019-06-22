import React from "react";
import TableA from "components/TableA";
import AxiosInstance, { endPoint } from "utils/api";
import _ from "lodash";
import { Button, Form } from "react-bootstrap";

class ThongKeA extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    submit = () => {
        AxiosInstance.post("apiAdmin/thongkeRap", {
            dateA: this.refs.dateBegin.value,
            dateB: this.refs.dateEnd.value
        }).then(res => {
            this.setState({
                data: res.data.data
            });
        });
    };

    render() {
        return (
            <div>
                <h1>Thống kê tho Cụm Rạp</h1>
                <div>
                    <Form>
                        <Form.Group controlId="id">
                            <Form.Label>Từ ngày</Form.Label>
                            <Form.Control
                                ref="dateBegin"
                                placeholder="Ngày bắt dầu"
                            />
                        </Form.Group>
                        <Form.Group controlId="name_city">
                            <Form.Label>Đến ngày</Form.Label>
                            <Form.Control
                                placeholder="Ngày kết thúc"
                                ref="dateEnd"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Button
                                variant="outline-info"
                                onClick={this.submit}
                            >
                                Tìm
                            </Button>
                        </Form.Group>
                    </Form>
                </div>
                <TableA data={this.state.data} />
            </div>
        );
    }
}

export default ThongKeA;
