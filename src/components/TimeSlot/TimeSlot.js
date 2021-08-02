import React from 'react'
import { Slot } from '../Slot/Slot';

export const TimeSlot = () => {
    let slots = ['09:00', '09:30', '10:00', '10:30',
                 '11:00', '11:30', '12:00', '12:30',
                 '13:00', '13:30', '14:00', '14:30',
                 '15:00', '15:30', '16:00', '16:30',
                 '17:00', '17:30', '18:00', '18:30',
                 '19:00', '19:30', '20:00', '20:30',
                 '21:00'];

    return (
        <div id = "times" className = "left" data-testid = 'slotwrapper'>
              {
                  slots.map(function(slot, index) {
                      return (
                      <Slot slot = {slot} key = {index} />
                      );
                  })
              }  
        </div>
    );
}
