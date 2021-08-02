import React from 'react';
import { render, screen } from "@testing-library/react";
import { Slot } from "../Slot";

describe("Slot", ()=> {
    it('should test Slot', ()=> {
        render(<Slot slot = '08:00'/>);
        const slotElement = screen.getByText(/08:00/i);
        expect(slotElement).toBeInTheDocument();
        
    })

    it('should test Slot for', ()=> {
        render(<Slot slot = '09:30'/>);
        const slotElement = screen.queryByText(/30/i);
        expect(slotElement).toBeInTheDocument();
    }) 

})