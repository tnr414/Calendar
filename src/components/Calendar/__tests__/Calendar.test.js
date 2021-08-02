import React from 'react';
import { render, screen } from "@testing-library/react";
import { Calendar } from "../Calendar";

describe("Calendar", ()=> {
    it('should test Calendar', async()=> {
        render(<Calendar/>);
        const element =  await screen.findAllByTestId(/event/i);
        expect(element.length).toBe(6);
    })
})