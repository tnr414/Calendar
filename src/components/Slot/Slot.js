import React from 'react'

export const Slot = (props) => {

    if(props.slot.substr(3,5) === '00') {
        return (
            <div className="slot" data-testid = 'timeslot'>{props.slot}</div>
        );
    } else if(props.slot.substr(3,5) === '30'){
        return (
            <div className="slot" data-testid = 'timeslot'><span>{props.slot}</span></div>
        );
    }
}
