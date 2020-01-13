import React, { useState,Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter , Row, Col, Label } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);




class CommentForm extends Component{
  constructor(props){
    super(props);
    this.state={
      isModalOpen:false
    }
    this.toggle=this.toggle.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  
  toggle(){
    this.setState({
      isModalOpen:!this.state.isModalOpen
    })
  }

  handleSubmit(values) 
      {
            this.toggle();
            console.log('Current State is: ' + JSON.stringify(values));
            alert('Current State is: ' + JSON.stringify(values));
            //event.preventDefault();
        }


  render(){
    return(
      <div>
        <Button outline onClick={this.toggle}>
          <span className="fa fa-sign-in fa-lg"></span>Submit
        </Button>
         <Modal isOpen={this.state.isModalOpen}>
         <ModalHeader toggle={this.toggle}>Submit Comment</ModalHeader>
         <ModalBody>

         <LocalForm onSubmit={values=>this.handleSubmit(values)}>
          <Row className="form-group">
          <Label htmlFor="Rating" md={12}>Rating</Label>
          <Col md={12}>
          <Control.select model=".rating" name="rating" className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>


            <Row className="form-group">
                                <Label htmlFor="Name" md={12}>Your Name</Label>
                                <Col md={12}>
                                    <Control.text model=".name" id="name" name="name"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".firstname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 3 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                            </Row>

                           <Row className="form-group">
                                <Label htmlFor="Comment" md={12}>Comment</Label>
                                <Col md={12}>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="12"
                                        className="form-control" />
                                </Col>
                            </Row> 
          <Row className="form-group">
                                <Col md={{size:10}}>
                                    <Button type="submit" color="primary">
                                    Submit
                                    </Button>
                                </Col>
                            </Row>
        
        </LocalForm>
        </ModalBody>
        </Modal>
      </div>

    );
  }



}
export default ModalExample;
