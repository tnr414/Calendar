const manipulateData = (data)=> {
    for(let i = 0; i < data.length; i++) {
        data[i].timeString = addActualTimeString(data[i]);
        data[i].start = changeDataFormat(data[i].start);
        data[i].end = changeDataFormat(data[i].end);
        data[i].duration = addDurantion(data[i]);
    }
    data = addConcurrentEventsAndOrder(data);
    return data;
}

function addActualTimeString(event) {
    return event.start.substr(0,2)+":"+event.start.substr(2,4) + " - "+ 
                       event.end.substr(0,2)+":"+event.end.substr(2,4);
 }

 function changeDataFormat(time) {
     let hours = Number(time.substr(0,2)) - 9;
     let minutes = Number(time.substr(2,4));
     return 60*hours + minutes;
 }

 function addDurantion(event) {
     return event.end - event.start;
 }

 
 function addConcurrentEventsAndOrder(data) {
     let times = [], occupiedSpace = [];
     for(let i = 0; i < data.length; i++) {
         // intialize order and concurrent of data to zero
         data[i].concurrent = 0; data[i].order = 0;
     }
     for(let i = 0; i < data.length; i++) {
         // intialize occupied with arrray of zero of same length of data
         occupiedSpace.push('unoccupied');
     }
     for(let index = 0; index < data.length; index++) {
         times.push([data[index].start, 'start', index]);
         times.push([data[index].end, 'end', index] );
     }
     let dataAtIndex = new Map();
     //let map = new Map();
     times.sort(function(a,b){return a[0] - b[0]});

     let currentEvents = [];
     for(let i = 0; i < times.length; i++) {
         if(times[i][1] === 'start') {
             
             currentEvents.push([times[i][2], times[i][0]] );
             for(let space = 0; space < occupiedSpace.length; space++) {
             if(occupiedSpace[space] === 'unoccupied') {
                 data[times[i][2]].order = space;
                 occupiedSpace[space] = 'occupied';
                 dataAtIndex.set(times[i][2], space);
                 break;
             }
             }
         } else if(times[i][1] === 'end') {
             currentEvents.pop();
             occupiedSpace[dataAtIndex.get(times[i][2])] = 'unoccupied';
         }
         for(let j = 0; j < currentEvents.length; j++) {
             data[currentEvents[j][0]].concurrent = Math.max(data[currentEvents[j][0]].concurrent, currentEvents.length); 
         }
         
     }  
     return data;
 }


export default manipulateData;