import React from "react";
import TableCity from "components/TableCity";
import PopupCity from "components/PopupCity";
import AxiosInstance, { endPoint } from "utils/api";
import _ from "lodash";

class City extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    handleDel = id => {
        console.log("handle in table ", +id);
        AxiosInstance.delete("apiAdmin/cities/" + id).then(e => {
            var data = this.state.data;
            _.map(data, a => {
                return a.id === id ? (a.delete = !a.delete) : a;
            });

            this.setState({
                data
            });
        });
    };

    componentDidMount() {
        AxiosInstance.get(endPoint.cites, {
            params: { viewdel: "all", order: "id" }
        }).then(res => {
            this.setState({
                data: res.data.data
            });
            console.log(res.data);
        });
    }

    handleEditTable = item => {};

    render() {
        return (
            <div>
                <h1>Quản lí các thành phố</h1>
                <TableCity data={this.state.data} delItem={this.handleDel} />
                <PopupCity show={true} add={true} done={e => {}} />
            </div>
        );
    }
}

export default City;
