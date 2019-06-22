import React from "react";
import TableShowTime from "components/TableShowTime";
import AxiosInstance, { endPoint } from "utils/api";
import _ from "lodash";

class ShowTime extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        AxiosInstance.get("apiAdmin/showtime", {
            params: { viewdel: "all", order: "-id" }
        }).then(res => {
            this.setState({
                data: res.data.data
            });
            console.log(res.data);
        });
    }

    handleDel = id => {
        AxiosInstance.delete("apiAdmin/showTime/" + id).then(e => {
            var data = this.state.data;
            _.map(data, a => {
                return a.id === id ? (a.delete = !a.delete) : a;
            });

            this.setState({
                data
            });
        });
    };

    render() {
        return (
            <div>
                <h1>Quản lý lịch chiếu</h1>
                <TableShowTime
                    data={this.state.data}
                    delItem={this.handleDel}
                />
            </div>
        );
    }
}

export default ShowTime;
