import React, {useState, useEffect} from 'react'
import { Event } from '../Event/Event';
import manipulateData from './manipulateData';

export const Calendar = () => {
    let [events, setEvents] = useState([]);

    useEffect(()=>{
        const url = "https://recruiter-static-content.s3.ap-south-1.amazonaws.com/json_responses_for_tests/test.json";
        fetch(url).then(response => response.json())
        .then(data => setEvents(manipulateData(data)))
        },[]
        )

    return (
        <div id = 'calander' className = "left" data-testid = 'calendar'>          
            {events.map(function(event, index) {
                return(
                    <Event event = {event} key = {index}/>
                );
            })}
        </div>
    );
}
