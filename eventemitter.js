/** all event properties and methods are an instance of an 
 * EventEmitter object. To be able to access these properties and methods, 
 * create an EventEmitter object.
 * You can assign event handlers to your own events with the EventEmitter object.
 */

 var events = require('events');
 var eventEmitter = new events.EventEmitter();

 //Create an event handler
 var myEventHandler = function(){
     console.log('I hear a scream!');
 }

 //Assign the event handler to an event : 
eventEmitter.on('scream',myEventHandler);

//Fire the 'scream' event
eventEmitter.emit('scream');


