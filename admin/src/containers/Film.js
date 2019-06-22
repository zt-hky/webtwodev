import React from "react";
import TableFilm from "components/TableFilm";
import AxiosInstance, { endPoint } from "utils/api";
import _ from "lodash";

class Film extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        AxiosInstance.get("api/films", {
            params: { viewdel: "all", order: "-id" }
        }).then(res => {
            this.setState({
                data: res.data.data
            });
            console.log(res.data);
        });
    }

    handleDel = id => {
        AxiosInstance.delete("apiAdmin/film/" + id).then(e => {
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
                <h1>Quản danh sách các phim</h1>
                <TableFilm data={this.state.data} delItem={this.handleDel} />
            </div>
        );
    }
}

export default Film;
