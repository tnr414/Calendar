import React from 'react';
import manipulateData from "../manipulateData";

let data = [
    {
      "title": "A",
      "start": "0945",
      "end": "1115"
    },
    {
      "title": "B",
      "start": "1810",
      "end": "1900"
    },
    {
      "title": "C",
      "start": "1830",
      "end": "1930"
    },
    {
      "title": "D",
      "start": "1905",
      "end": "2005"
    },
    {
      "title": "E",
      "start": "1045",
      "end": "1130"
    },
    {
      "title": "F",
      "start": "1815",
      "end": "2030"
    }
  ]

describe('manipulate data function', ()=> {

    data = manipulateData(data);

    describe('test the properties of first object', ()=> {
      it('should test duration', ()=> {
        expect(data[0]).toHaveProperty('duration', 90)
      })

      it('should test timestring', ()=> {
        expect(data[0]).toHaveProperty('timeString', '09:45 - 11:15')
      })

      it('should test concurrent value', ()=> {
        expect(data[0]).toHaveProperty('concurrent', 2)
      })

      it('should test order', ()=> {
        expect(data[0]).toHaveProperty('order', 0)
      })

    })

    describe('test the properties of second object', ()=> {
      it('should test duration', ()=> {
        expect(data[1]).toHaveProperty('duration', 50)
      })

      it('should test timestring', ()=> {
        expect(data[1]).toHaveProperty('timeString', '18:10 - 19:00')
      })

      it('should test concurrent value', ()=> {
        expect(data[1]).toHaveProperty('concurrent', 3)
      })

      it('should test order', ()=> {
        expect(data[1]).toHaveProperty('order', 0)
      })

    })

    describe('test the properties of third object', ()=> {
      it('should test duration', ()=> {
        expect(data[2]).toHaveProperty('duration', 60)
      })

      it('should test timestring', ()=> {
        expect(data[2]).toHaveProperty('timeString', '18:30 - 19:30')
      })

      it('should test concurrent value', ()=> {
        expect(data[2]).toHaveProperty('concurrent', 3)
      })

      it('should test order', ()=> {
        expect(data[2]).toHaveProperty('order', 2)
      })

    })

    describe('test the properties of fourth object', ()=> {
      it('should test duration', ()=> {
        expect(data[3]).toHaveProperty('duration', 60)
      })

      it('should test timestring', ()=> {
        expect(data[3]).toHaveProperty('timeString', '19:05 - 20:05')
      })

      it('should test concurrent value', ()=> {
        expect(data[3]).toHaveProperty('concurrent', 3)
      })

      it('should test order', ()=> {
        expect(data[3]).toHaveProperty('order', 0)
      })

    })    

    describe('test the properties of fifth object', ()=> {
      it('should test duration', ()=> {
        expect(data[4]).toHaveProperty('duration', 45)
      })

      it('should test timestring', ()=> {
        expect(data[4]).toHaveProperty('timeString', '10:45 - 11:30')
      })

      it('should test concurrent value', ()=> {
        expect(data[4]).toHaveProperty('concurrent', 2)
      })

      it('should test order', ()=> {
        expect(data[4]).toHaveProperty('order', 1)
      })
      
    })

    describe('test the properties of sixth object', ()=> {
      it('should test duration', ()=> {
        expect(data[5]).toHaveProperty('duration', 135)
      })

      it('should test timestring', ()=> {
        expect(data[5]).toHaveProperty('timeString', '18:15 - 20:30')
      })

      it('should test concurrent value', ()=> {
        expect(data[5]).toHaveProperty('concurrent', 3)
      })

      it('should test order', ()=> {
        expect(data[5]).toHaveProperty('order', 1)
      })

    })
    
})