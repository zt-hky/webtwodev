import React, { Component } from 'react';
import  Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
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

class Theater_Form extends Component {
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

  render() {
    return (
      <div className="animated fadeIn">
       
        <FormGroup className='justify-content-md-center'>
          <Col xs="12" md="10">
            <Card>
              <CardHeader>
                <strong>Thêm rạp</strong> 
              </CardHeader>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  <FormGroup row>
                    <Col md="3">
                      <Label>Tên rạp</Label>
                    </Col>
                    <Col xs="12" md="9">
                    <Input type="text" id="text-input" name="text-input" placeholder="Nhập tên rạp" />
                    <FormText color="muted"></FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Mô tả</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="Mô tả" />
                      <FormText color="muted"></FormText>
                    </Col>
                  </FormGroup>
                  
                  <Row>
                  <Col xs="3"> <Label htmlFor="row">Số hàng</Label></Col>
                  <Col xs="3">  <Input type="number" id="row" name="row"  /></Col>
                  <Col xs="3"><Label htmlFor="column">Số cột</Label></Col>
                  <Col xs="3"><Input type="number" id="column" name="column"  /></Col>
                </Row>
                 
                  <FormGroup row >
             
                  <Col md="3">
                    <Label htmlFor="file-input">Chọn Ảnh Poster</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="file" id="file-input" name="file-input" />
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
          
        </FormGroup>
      
      </div>
    );
  }
}

export default Theater_Form;
