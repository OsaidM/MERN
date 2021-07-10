import React from 'react';
const MessageDisplay = (props) => {
    return (
        <>
{/*             <h1>Current Message</h1>
            <pre>{ props.message }</pre> */}
            <div> 
                {props.message.map((item, index)=> {
                    let style={backgroundColor:item};
                    return <div index={index} style={style}>{item}</div>
            })}</div>
        </>
    );
};
   
    // in the style instead of color you can change it to background-color:
export default MessageDisplay;
