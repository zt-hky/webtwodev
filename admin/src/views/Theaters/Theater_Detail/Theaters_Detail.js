import React, { Component } from 'react';
import  Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import img from '../../../assets/img/Room/room1.jpg'
import {Link} from 'react-router-dom'
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
  Row, CardImg, CardText, 
  CardTitle
} from 'reactstrap';

class Theaters_Detail extends Component {
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
       
        <Row className='justify-content-md-center'>
          <Col xs="12" md="10" >
            <Card>
              <CardHeader>
                <strong>Thông tin</strong> 
              </CardHeader>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  <FormGroup row>
                    <Col md="3">
                      <Label>Tên cụm rạp</Label>
                    </Col>
                    <Col xs="12" md="9">
                    <Input type="text" id="text-input" name="text-input" value ="127 Nguyễn  Văn Cừ" />
                    <FormText color="muted"></FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Địa chỉ</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" value ="127 Nguyễn  Văn Cừ" />
                      <FormText color="muted"></FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="textarea-input">Mô tả</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="textarea" name="textarea-input" id="textarea-input" 
                           placeholder="Content..." value= "abcxzy"/>
                  </Col>
                </FormGroup>
                 
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="date-input" >Ngày thành lập</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="date" id="date-input" value="2018-07-22" name="date-input" placeholder="date" />
                    </Col>
                  </FormGroup>
                 
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="textarea-input">Hoạt động</Label>
                    </Col>
                    <Col xs="12" md="9">
                    <FormControlLabel
        control={
          <Switch  value="checkedB"  color="primary"   />
           }
      />
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Lưu dữ liệu</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Hoàn tác</Button>
              </CardFooter>
            </Card>
            
          </Col>
          
        </Row>
        <Row className='justify-content-md-center'>
        <Col xs="12" md="10">
        <Card>
        <CardHeader>
        <strong>Danh sách rạp</strong> 
        </CardHeader>
       
        <CardBody>
        <Row>
        <Col sm="6">
        <Card body>
        <CardImg top width="100%" src={img} alt="Card image cap" />
          <CardTitle><strong>Room 1 2D</strong> </CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Row className="">
        <Col   xs="6 "  className =' text-center'>
        <Button  color="primary" className='btn-block' >Chi Tiết</Button>
        </Col>
        <Col  xs="6" className =' text-center'>
        <Button color="secondary" className='btn-block' >Xóa</Button>
        </Col>
       
        </Row>
      
        </Card>
      </Col>
      <Col sm="6">
        <Card body>
        <CardImg top width="100%" src={img} alt="Card image cap" />
          <CardTitle><strong>Room 2 2D</strong> </CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Row className="">
          <Col   xs="6 "  className =' text-center'>
          <Button  color="primary" className='btn-block' >Chi Tiết</Button>
          </Col>
          <Col  xs="6" className =' text-center'>
          <Button color="secondary" className='btn-block' >Xóa</Button>
          </Col>
         
          </Row>
        
        </Card>
      </Col>

      <Col sm="6">
      <Card body>
      <CardImg top width="100%" src={img} alt="Card image cap" />
        <CardTitle><strong>Room 3 3D</strong> </CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Row className="">
        <Col   xs="6 "  className =' text-center'>
        <Button  color="primary" className='btn-block' >Chi Tiết</Button>
        </Col>
        <Col  xs="6" className =' text-center'>
        <Button color="secondary" className='btn-block' >Xóa</Button>
        </Col>
       
        </Row>
      
      </Card>
    </Col>
    <Col sm="6">
      <Card body>
      <CardImg top width="100%" src={img} alt="Card image cap" />
        <CardTitle><strong>Room 4 3D</strong> </CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        
       
        <Row className="">
        <Col   xs="6 "  className =' text-center'>
        <Button  color="primary" className='btn-block' >Chi Tiết</Button>
        </Col>
        <Col  xs="6" className =' text-center'>
        <Button color="secondary" className='btn-block' >Xóa</Button>
        </Col>
       
        </Row>
      
       
      </Card>
    </Col>
        </Row>
           <Link to='/Theaters/Theaters_Form'>
           <Button color="primary">Thêm Rạp</Button>{' '}
           </Link>
       
        </CardBody>
        </Card>
        </Col>
            </Row>
      </div>
      
    );
  }
}

export default Theaters_Detail;
