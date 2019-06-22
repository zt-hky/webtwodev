import React from "react";
import TableCity from "components/TableCity";
import PopupCity from "components/PopupCity";
import AxiosInstance, { endPoint } from "utils/api";
import _ from "lodash";

class City extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            item: {
                id: null,
                name: ""
            },
            show: false,
            add: true
        };

        this.handleEditTable = this.handleEditTable.bind(this);
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

    update = data => {
        console.log(data);
        if (this.state.add) {
            AxiosInstance.post("apiAdmin/cities", {
                name: data.name
            }).then(e => {
                this.setState({
                    show: false
                });
            });
        } else {
            Axioname: data.namesInstance.put(
                "apiAdmin/cites/" + this.state.item.id,
                {
                    name: data.name
                }
            );
        }
        this.forceUpdate();
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

    handleEditTable = item => {
        console.log(this.state);
        return this.setState({
            show: true,
            add: false,
            item
        });

        console.log(this.state);
    };

    popup = data => {};

    render() {
        return (
            <div>
                <h1>Quản lí các thành phố</h1>
                <TableCity
                    data={this.state.data}
                    update={this.handleEditTable}
                    delItem={this.handleDel}
                />
                {this.state.show ? (
                    <PopupCity
                        add={this.state.add}
                        done={this.popup}
                        data={this.state.item}
                        update={this.update}
                    />
                ) : (
                    ""
                )}
            </div>
        );
    }
}

export default City;
