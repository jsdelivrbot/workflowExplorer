import React, { Component } from 'react';
import { Card, CardHeader, CardBody, CardFooter } from "react-simple-card";

const Tile = (props) =>{
    console.log(props);
    return(
        <div  className="card">
            <Card>
                <CardHeader>{props.workflow}</CardHeader>
                
            </Card>
        </div>
    )
}

export default Tile;
