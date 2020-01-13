import React, { useState,Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle,Breadcrumb,BreadcrumbItem } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter , Row, Col, Label } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { baseUrl } from './baseURL';



const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

function RenderComments({comments,postComment,dishID}){
  if(comments!=null)
    return(
      <div>
      <h4>Comments</h4>
      <ul className="list-unstyled">
      {comments.map((comment)=>{
        return(
        <li key={comment.id}>
        <p>{comment.comment}</p> 
        <p>--{comment.author} {comment.date} </p>
        </li>
        )

      })}

      </ul>
      {console.log(dishID)}
       <CommentForm dishID={dishID} postComment={postComment} />
      
      </div>

      )
}

function Dish({dish}){
  if(dish!=null){
    return(
    <div>
   
      <Card>
            <CardImg top src={baseUrl + dish.image} alt={dish.name} />
            <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>              
    </div>
   
    )
  }
}


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
            this.props.postComment(this.props.dishID, values.rating, values.author, values.comment);
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
                                <Label htmlFor="author" md={12}>Your Name</Label>
                                <Col md={12}>
                                    <Control.text model=".author" id="author" name="author" 
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                             minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
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










const Dishdetail = (props) =>{
      
      if (props.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }


      else if (props.errMess) {
            return(
                <div className="container">
                    <div className="row">            
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        }  

      else if(props.dish!=null){

        return (
          <div className="container">
            <div className="row">
            <div className="col-12">
              <Breadcrumb>
              <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
              <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
              </Breadcrumb>
            </div>
            </div>
            <div className="row">
            <div className="col-sm-12 col-md-5 m-1">
              <Dish dish={props.dish} />     
              </div>

              <div className="col-sm-12 col-md-5 m-1">
              <RenderComments comments={props.comments}  
              postComment={props.postComment}
              dishID={props.dish.id}/>
              {console.log(props.dish.id)}
              </div>
              </div>
              </div>
            
        );
      }
      else{
        return(
        <div>
        </div>

        )
      }
    
}


export default Dishdetail;