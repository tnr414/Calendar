import React from 'react'

export const Event = (props) => {
    let divStyle = {
        background: "#"+Math.floor(Math.random()*16777215).toString(16), 
        height: props.event.duration,
        width: 600/props.event.concurrent, 
        left: props.event.order*(600/props.event.concurrent),
        top: props.event.start,
        position: 'absolute',
        textAlign: 'center', 
    };

    return (
        <div data-testid = 'event'
            style = {divStyle}>
            {props.event.title}
            <br/>
            {props.event.timeString}
        </div>
    );
}
