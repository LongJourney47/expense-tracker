import React from 'react';
import './GraphColumns.css'

const GraphColumns = (props) => {
let columnFillHeight = '0%';
// will provide a percentage of how much a column will be filled
if (props.maxValue > 0) {
    // rounds to the nearest interger
    columnFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
}



    return(
        <div className='graph-column'>
            <div className='graph-column__inner'>
                {/* this part is needed to remember by 
                how much the graph will be filled */}
               
                <div className='graph-column__fill' style={{ height: columnFillHeight}} ></div>
            </div>
            <div className='graph-column__label'>{props.label}</div>
        </div>
       
    )
};


export default GraphColumns;