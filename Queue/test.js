const ArrayQueue = require('./ArrayQueue.js')
const print = console.log.bind(this);

let arrayQueue = new ArrayQueue();

for(let i = 0; i < 10; i++){
    arrayQueue.enqueue(i)
    print(arrayQueue.toString())
    if(i % 3 === 2) {
        arrayQueue.dequeue();
        print(arrayQueue.toString())
    }
} 