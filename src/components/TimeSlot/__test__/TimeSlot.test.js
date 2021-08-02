import React from 'react';
import { render, screen } from "@testing-library/react";
import { TimeSlot } from "../TimeSlot";

describe("TimeSlot Component", ()=> {
    it('should test length of the slots', ()=> {
        render(<TimeSlot/>);
        const element = screen.getAllByTestId('timeslot');
        expect(element.length).toBe(25);
    })

    it('should test Timeslot', ()=> {
        render(<TimeSlot/>);
        const element = screen.getByTestId('slotwrapper');
        expect(element).toMatchSnapshot();
    })
})