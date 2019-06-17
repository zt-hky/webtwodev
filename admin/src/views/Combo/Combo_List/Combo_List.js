import React, { Component } from 'react';
import img from '../../../assets/img/Room/room1.jpg';
import  Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {Link} from 'react-router-dom'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Form,
  FormGroup,CardImg,CardText,CardTitle,
  FormText,
  Input,
  Label,
  Row,
} from 'reactstrap';

class Forms extends Component {
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
                <strong>Combo hiện có</strong> 
              </CardHeader>
              <CardBody>
               <Row>
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
               
               </Row>
              </CardBody>
           
            </Card>
            
          </Col>
          <Col>
          <Link to='/Combo/Combo_Form'>
          <Button color="primary">Thêm Combo</Button>{' '}
          </Link>
          </Col>
        
        </FormGroup>
        
      
      </div>
    );
  }
}

export default Forms;
