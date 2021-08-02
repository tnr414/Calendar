import React from 'react';
import { render, screen } from "@testing-library/react";
import { Schedular } from "../Schedular";

describe("Schedular", ()=> {
    it('should test Schedular', async()=> {
        render(<Schedular/>);
        const element = screen.getByTestId(/Schedular/i);
        expect(element).toMatchSnapshot();
    })
})