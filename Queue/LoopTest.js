const LoopQueue = require('./LoopQueue.js')
const print = console.log.bind(this);

let loopQueue = new LoopQueue();

for(let i = 0; i < 10; i++){
    loopQueue.enqueue(i)
    print(loopQueue.toString())
    if(i % 3 === 2) {
        loopQueue.dequeue();
        print(loopQueue.toString())
    }
} 