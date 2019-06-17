import React, { Component } from 'react';
import  Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import img from '../../../assets/img/Room/room1.jpg'
import {Link} from 'react-router-dom'
import {
  Button,
  Card,
  CardBody,PaginationItem,PaginationLink,Pagination,
  CardFooter,
  CardHeader,
  Col,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,CardText,
  Row,CardImg,CardTitle
} from 'reactstrap';

class Films extends Component {
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
            <strong>Thông tin</strong> 
          </CardHeader>
          <CardBody>
            <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
              <FormGroup row>
                <Col md="3">
                  <Label>Tên thể loại</Label>
                </Col>
                <Col xs="12" md="9">
                <Input type="text" id="text-input" name="text-input" value="Kiếm hiệp" />
                <FormText color="muted"></FormText>
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
      
    </FormGroup> 



        <FormGroup >
        <Col xs="12" md="10">
        <CardHeader>
          <Row>
            <Col xs ="3">
            <strong>Danh sách phim</strong> 
            </Col>
            <Col>
            <Link  to='/Film/Film_Form'>
            <Button color="primary">Thêm phim</Button>{' '}
            </Link></Col>
          
          </Row>
      
      
        </CardHeader>

          <CardBody>
          <Row>
        <Col xs="4">
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


      <Col xs="4">
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



    <Col xs="4">
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


  <Col xs="4">
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


<Col xs="4">
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


<Col xs="4">
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
    </CardBody>
    </Col>
        </FormGroup>
      

        <Row>
          <Col xs="12" md="10" className =' text-center d-flex'>
          <Pagination className ='text-center mx-auto'>
          <PaginationItem disabled>
            <PaginationLink previous tag="button" />
          </PaginationItem>
          <PaginationItem active>
            <PaginationLink tag="button">
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink tag="button">
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink tag="button">
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink tag="button">
              4
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink tag="button">
              5
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink next tag="button" />
          </PaginationItem>
        </Pagination>
        </Col>
        </Row>
      </div>
    );
  }
}

export default Films;
