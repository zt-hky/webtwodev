import React from 'react';
import PropTypes from 'prop-types';

export class MessageBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: false
        }
    }

    render() {
        return (
            <div className={"alert alert-" + this.props.kind}>
                <strong>{this.props.title}</strong>
                <p>{this.props.message}</p>
            </div>
        );
    }
}
MessageBox.propTypes = {
    kind: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),
    title: PropTypes.string,
    message: PropTypes.string
}
MessageBox.defaulProps = {
    kind: 'primary',
    title: '',
    message: ''
}