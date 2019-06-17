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

class Film_Type extends Component {
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
                <strong>Thêm Thể loại</strong> 
              </CardHeader>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  <FormGroup row>
                    <Col md="3">
                      <Label>Tên thể loại</Label>
                    </Col>
                    <Col xs="12" md="9">
                    <Input type="text" id="text-input" name="text-input" placeholder="Nhập tên thể loại" />
                    <FormText color="muted"></FormText>
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

export default Film_Type;
