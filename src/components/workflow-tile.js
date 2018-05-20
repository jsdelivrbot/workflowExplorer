import React, { Component } from 'react';
import jsonData from '../resource/WorkflowData.json';
import { Card, CardHeader, CardBody, CardFooter } from "react-simple-card";
import Pagination from "react-js-pagination";
import Workflow from './workflows';

import '../../style/style.css';

export default class Workflows extends Component {
    constructor() {
      super();
      var arr = [];
      var workflowTile=[];
      Object.keys(jsonData).forEach(function(key) {
        arr.push(jsonData[key]);
      });
      
      this.state = {
        data: jsonData,
        names: arr,
        name:'',
        workflowTile:[]
        
      };
        
    }

    // componentWillMount(){
    //     this.setState({
    //         workflowTile:this.state.names.map((name) =>{
    //             return <Tile wfName = {name}  />;
    //              })
    //     })  
    // }
    render(){
       
        return(
            // <div className="card_panel">
            //     <div  className="card">
            //     <Card>
            //     <CardHeader>{this.state.names[0].Name}</CardHeader>
                
            //     </Card>
            //      </div>
            //     <Workflow workflows = {this.state.names} />
            
            
            
            // </div>
            
            <Workflow workflows = {this.state.names} />
  
        );
    }
}