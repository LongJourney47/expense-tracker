import React from 'react'
import './Card.css'
// card or container components are used for css styles that will appear on a consistent or semi consistent basis
// will acts as a shell for other components that affect their styling
// children is a reserved name that refers to the content inbetween the opening and closing tags
// custom components will only support what you tell them to support
const Card = (props) => {
    // the const for classes is important for having the code registar other css data
    const classes = 'card ' + props.className;
    return(
        <div className={classes}>{props.children}</div>
    )
}



export default Card;