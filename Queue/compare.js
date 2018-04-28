const LoopQueue = require('./LoopQueue')
const ArrayQueue = require('./ArrayQueue')

function testQueue(queue, opCount) {
    let startTime = (new Date()).getTime();
    
    for(let i = 0; i < opCount; i++) {
        queue.enqueue(i);
    }

    for(let i = 0; i < opCount; i++) {
        queue.dequeue();
    }

    let endTime = (new Date()).getTime();

    return (endTime - startTime) / 1000;
}

function main() {
    let opCount = 10000;
    let arrayQueue = new ArrayQueue();
    let time1 = testQueue(arrayQueue, opCount);
    console.log(`ArrayQueue, time: ${time1}s`);

    let loopQueue = new LoopQueue();
    let time2 = testQueue(loopQueue, opCount);
    console.log(`LoopQueue, time: ${time2}s`);
}

main();