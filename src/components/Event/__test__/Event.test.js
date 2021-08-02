import React from 'react';
import { render, screen } from "@testing-library/react";
import { Event } from "../Event";


    let data = 
        {
            concurrent: 2,
            duration: 90,
            end: 135,
            order: 0,
            start: 45,
            timeString: "09:45 - 11:15",
            title: "A"
        };
        
describe("Event", ()=> {

    it('should render in the document', ()=> {
        render(<Event event = {data}/>);
        const element = screen.getByText(/A/i);
        expect(element).toBeInTheDocument();
    })

    it('should test height of the event', ()=> {
        render(<Event event = {data}/>);
        const element = screen.getByText(/A/i);
        expect(element).toHaveStyle({height: `${data.duration}px`});
    })

    it('should test width of the Event', ()=> {
        render(<Event event = {data}/>);
        const element = screen.getByText(/A/i);
        expect(element).toHaveStyle({width: `${600/data.concurrent}px`});
    })

    it('should test position of the Event', ()=> {
        render(<Event event = {data}/>);
        const element = screen.getByText(/A/i);
        expect(element).toHaveStyle({position: 'absolute'});
    })

    it('should test left margin of the Event', ()=> {
        render(<Event event = {data}/>);
        const element = screen.getByText(/A/i);
        expect(element).toHaveStyle({left: `${data.order*(600/data.duration)}px`});
    })

    it('should test top margin of the Event', ()=> {
        render(<Event event = {data}/>);
        const element = screen.getByText(/A/i);
        expect(element).toHaveStyle({top: `${data.start}px`});
    })

})