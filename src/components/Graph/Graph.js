import React from 'react';
import './Graph.css'
import GraphColumns from './GraphColumns';

const Graph = (props) => {
    // will transform the object of data into numbers
   const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
// pulls out the arrays out all of the array elemeents, 
// making them stand alone arguements
   const totalMaximum = Math.max(...dataPointValues)
    
    return(
        <div className='graph'>
            {/* the value will fill the columns  */}
            {/* the map over will allow for better 
            conifugreation of the columns */}
            {props.dataPoints.map((dataPoint) => ( 
            <GraphColumns 
            key={dataPoint.label} 
            value={dataPoint.value} 
            maxValue={totalMaximum} 
            label={dataPoint.label} 
            />
            ))}
        </div>
       
    );
};


export default Graph;