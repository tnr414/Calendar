import React from 'react'
import { TimeSlot }  from '../TimeSlot/TimeSlot'
import { Calendar } from '../Calendar/Calendar'

export const Schedular = () => {
    return (
        <div id = "wrapper" data-testid = 'schedular'>
            <TimeSlot/>
            <Calendar/>
        </div>
    )
}
