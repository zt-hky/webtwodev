import React from "react";
import TableThreatreSet from "components/TableThreatreSet";
import AxiosInstance, { endPoint } from "utils/api";
import _ from "lodash";

class ThreatreSet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        AxiosInstance.get("apiAdmin/threatreSets", {
            params: { viewdel: "all", order: "id" }
        }).then(res => {
            this.setState({
                data: res.data.data
            });
            console.log(res.data);
        });
    }

    handleDel = id => {
        AxiosInstance.delete("apiAdmin/threatreSet/" + id).then(e => {
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
                <h1>Quản lý cụm rạp</h1>
                <TableThreatreSet
                    data={this.state.data}
                    delItem={this.handleDel}
                />
            </div>
        );
    }
}

export default ThreatreSet;
