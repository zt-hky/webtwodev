import React, { Component } from 'react';
import  Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import TheatersFormAction from '../../../action/TheatersForm.action';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
} from 'reactstrap';

class Theaters_Form extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }
  frm_onSubmit = (event) => {
    this.props.TheatersForm({TheatersName:this.props.TheatersName, Address: this.props.Address, Description: this.props.Description,
      DateFound: this.props.DateFound , isActive : this.isActive,
    })
   }
  render() {
    return (
      <div className="animated fadeIn">
       
        <Row className='justify-content-md-center'>
          <Col xs="12" md="10">
            <Card>
              <CardHeader>
                <strong>Thêm cụm rạp</strong> 
              </CardHeader>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  <FormGroup row>
                    <Col md="3">
                      <Label>Tên Cụm rạp</Label>
                    </Col>
                    <Col xs="12" md="9">
                    <Input type="text" id="text-input" name="TheatersName" placeholder="Nhập tên cụm rạp" />
                    <FormText color="muted"></FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Địa chỉ</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="Address" placeholder="Nhập địa chỉ" />
                      <FormText color="muted"></FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="textarea-input">Mô tả</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="textarea" name="Description" id="textarea-input" rows="9"
                           placeholder="Content..." />
                  </Col>
                </FormGroup>
                 
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="date-input">Ngày thành lập</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="date" id="date-input" name="DateFound" placeholder="date" />
                    </Col>
                  </FormGroup>
                 
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="textarea-input">Hoạt động</Label>
                    </Col>
                    <Col xs="12" md="9">
                    <FormControlLabel
        control={
          <Switch  value="checkedB"  color="primary" name='isActive'  />
           }
      />
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Lưu dữ liệu</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Tạo lại</Button>
              </CardFooter>
            </Card>
            
          </Col>
          
        </Row>
      
      </div>
    );
  }
}

function MapStatetoProp(State){

  return State.Login;
}

function MapDisPatchtoProp(DisPatch){

  return bindActionCreators({
    inputChanged: TheatersFormAction.inputChanged,
    TheatersForm: TheatersFormAction.TheatersForm
  },DisPatch);
}

export default connect(MapStatetoProp, MapDisPatchtoProp)(Theaters_Form);
