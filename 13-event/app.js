const EventEmitter = require('events');

const emitter = new EventEmitter();

const callback1 = (args) => {
  console.log('first callback - ', args);
};

emitter.on('jiwoong', callback1);

emitter.on('jiwoong', (args) => {
  console.log('second callback - ', args);
});

emitter.emit('jiwoong', { message : 1 });
emitter.emit('jiwoong', { message : 2 });
emitter.removeListener('jiwoong', callback1);
emitter.emit('jiwoong', { message : 3 });