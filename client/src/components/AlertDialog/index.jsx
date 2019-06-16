import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { width } from '@material-ui/system';


export default class AlertDialog extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      open: this.props.open
    }
  }

  handleClickOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.props.onClose();
    this.setState({ open: false })
  }




  render() {
    return (
      <div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{this.props.title}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {this.props.content}
          </DialogContentText>
          </DialogContent>
          <DialogActions>
            {/*  <Button onClick={this.props.onClose} color="primary">
              Disagree
          </Button> */}
            <Button onClick={this.handleClose} color="primary" autoFocus>
              {this.props.rightButtonName}
          </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

AlertDialog.defaultProps = {
  open: false,
  title: "Alert",
  content: "this is an alert :)",
  rightButtonName:"Close",
  onClose: () => {
    alert("closed")
  }
}