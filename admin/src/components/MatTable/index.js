import React from "react";
import MaterialTable from "material-table";
import AxiosInstance, { endPoint } from "utils/api";

class MatTable extends React.Component {
    constructor(props) {
        super(props);
        var state;
        var setState;
    }

    componentDidMount() {
        AxiosInstance.get(endPoint.cites).then(res => {
            if (res.status === 200) {
                [this.state, this.setState] = React.useState({
                    columns: [
                        { title: "ID", field: "id" },
                        {
                            title: "Tên thành phố",
                            field: "name"
                        },
                        {
                            title: "Trạng thái",
                            field: "birthYear"
                        },
                        {
                            title: "Ngày tạo",
                            field: "createdAt"
                        }
                    ],
                    data: res.data
                });
            }
        });
    }

    render() {
        return (
            <MaterialTable
                title="Editable Example"
                columns={this.state.columns}
                data={this.state.data}
                editable={{
                    onRowAdd: newData =>
                        new Promise(resolve => {
                            setTimeout(() => {
                                resolve();
                                const data = [...this.state.data];
                                data.push(newData);
                                this.setState({
                                    ...this.state,
                                    data
                                });
                            }, 600);
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise(resolve => {
                            setTimeout(() => {
                                resolve();
                                const data = [...this.state.data];
                                data[data.indexOf(oldData)] = newData;
                                this.setState({
                                    ...this.state,
                                    data
                                });
                            }, 600);
                        }),
                    onRowDelete: oldData =>
                        new Promise(resolve => {
                            setTimeout(() => {
                                resolve();
                                const data = [...this.state.data];
                                data.splice(data.indexOf(oldData), 1);
                                this.setState({
                                    ...this
                                        .state,
                                    data
                                });
                            }, 600);
                        })
                }}
            />
        );
    }
}

export default MatTable;
