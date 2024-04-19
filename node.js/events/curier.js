let http = require('http');
let events = require('events');
let eventEmitter = new events.EventEmitter();
let PORT = 8080;

const myEvent = {
    courierCalled: 'courierCalled',
    courierOnTheWay: 'courierOnTheWay',
    courierArrived: 'courierArrived',
    packageDelivered: 'packageDelivered',
    courierBack: 'courierBack'
}

http.createServer((req, res) => {
    eventEmitter.emit(myEvent.courierCalled);
    res.end('Server is running');
    
}).listen(PORT);

eventEmitter.on(myEvent.courierCalled, callHandler);
eventEmitter.on(myEvent.courierOnTheWay, dispatchHandler);
eventEmitter.on(myEvent.courierArrived, arriveHandler);
eventEmitter.on(myEvent.packageDelivered, deliveredHandler);
eventEmitter.on(myEvent.courierBack, backHandler);

const callHandler = setTimeout(()=>{
    console.log("delivery is called");
    eventEmitter.emit(myEvent.courierOnTheWay)
}, 10000)
