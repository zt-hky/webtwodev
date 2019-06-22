import React from "react";
import TableGenre from "components/TableGenre";
import AxiosInstance, { endPoint } from "utils/api";
import _ from "lodash";

class TheLoai extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        AxiosInstance.get("apiAdmin/GenreFilms", {
            params: { viewdel: "all", order: "id" }
        }).then(res => {
            this.setState({
                data: res.data.data
            });
            console.log(res.data);
        });
    }

    handleDel = id => {
        AxiosInstance.delete("apiAdmin/genre/" + id).then(e => {
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
                <h1>Thể loại phim</h1>
                <TableGenre data={this.state.data} delItem={this.handleDel} />
            </div>
        );
    }
}

export default TheLoai;
