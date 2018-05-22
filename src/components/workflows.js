import React, { Component } from 'react';
import { Card, CardHeader, CardBody, CardFooter } from "react-simple-card";
import Tile from './tile';
import Pagination from "react-js-pagination";

const Workflow = (props) =>{
    const workflowTiles = props.workflows.map((workflow) => {
        //console.log(workflow.Key);
        return <Tile key = {workflow.Key} workflow = {workflow.Name} />;
    })
    //console.log("wfff"+workflowTiles);

    return (
        <div className = "card_panel">
        {workflowTiles}
        </div>
    );
}

export default Workflow;