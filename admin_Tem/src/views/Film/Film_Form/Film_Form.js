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

class Film_Form extends Component {
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
                <strong>Thêm Phim</strong> 
              </CardHeader>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  <FormGroup row>
                    <Col md="3">
                      <Label>Tên phim</Label>
                    </Col>
                    <Col xs="12" md="9">
                    <Input type="text" id="text-input" name="text-input" placeholder="Nhập tên rạp" />
                    <FormText color="muted"></FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="select">Select</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="select" id="select">
                        <option value="0">Please select</option>
                        <option value="1">Option #1</option>
                        <option value="2">Option #2</option>
                        <option value="3">Option #3</option>
                      </Input>
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
                  
                  <FormGroup row >
             
                  <Col md="3">
                    <Label htmlFor="file-input">Chọn Ảnh Poster</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="file" id="file-input" name="file-input" />
                  </Col>
                </FormGroup>

                <FormGroup row>
                <Col md="3">
                  <Label htmlFor="number-input">Runtime</Label>
                </Col>
                <Col xs="12" md="4">
                  <Input type="number" id="number-input" name="number-input" placeholder="" />
                </Col>
              </FormGroup>

              <FormGroup row>
              <Col md="3">
                <Label htmlFor="Studio-input">Studio</Label>
              </Col>
              <Col xs="12" md="9">
                <Input type="text" id="Studio-input" name="Studio-input" placeholder="" />
              </Col>
            </FormGroup>

                <FormGroup row>
                <Col md="3">
                  <Label htmlFor="date-input">Ngày ra mắt</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input type="date" id="date-input" name="date-input" placeholder="date" />
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
  }s
}

export default Film_Form;
