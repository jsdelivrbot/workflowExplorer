import React, { Component } from 'react';
import jsonData from '../resource/WorkflowData.json';
import { Card, CardHeader, CardBody, CardFooter } from "react-simple-card";
import Pagination from "react-js-pagination";
import Workflow from './workflows';

import '../../style/style.css';

export default class Workflows extends Component {
    constructor(props) {
      super(props);
      //console.log(this.props.value);
      this.state = {        
        names: this.props.value
      };
        
    }

    render(){
       
        return(          
            
            <Workflow workflows = {this.props.value} />
  
        );
    }
}