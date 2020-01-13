import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem,Button, Form, FormGroup, Label, Input, Col,FormFeedback } from 'reactstrap';
import '../App.css';
import ImageUploader from 'react-images-upload';
import Footer from './Footer'
import ReactSearchBox from 'react-search-box'

class View extends Component {
    
        constructor(props){
            super(props);
            this.state = {
             
        };
        
    }
 
      
    




        render()
        {
        
       

        return(
        <ReactSearchBox/>
        );
    }
}

export default View;