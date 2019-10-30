import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle,Breadcrumb,BreadcrumbItem } from 'reactstrap';

import { Link } from 'react-router-dom';


class Dishdetail extends Component {
       constructor(props) {
        super(props);

        this.state = {
            
        }
    }
    

    render() {
        if(this.props.dish!=null){


        const renderComment=this.props.comments.map((dishm)=>{
              return(
              <p>{dishm.comment} -- {dishm.author} {dishm.date}</p>
              )
          })


        return (
          <div className="container">
            <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{this.props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
          <div className="row">
          <div className="col-sm-12 col-md-5 m-1">
              <Card>
                  <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                  <CardBody>
                  <CardTitle>{this.props.dish.name}</CardTitle>
                  <CardText>{this.props.dish.description}</CardText>
                  </CardBody>
              </Card>
              </div>
          <div className="col-sm-12 col-md-5">
          <h4>Comments</h4>
          {renderComment}
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
}


export default Dishdetail;