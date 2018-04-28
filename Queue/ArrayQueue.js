const MyArray = require('./Array');

class ArrayQueue {
    constructor(capacity) {
        this.array = new MyArray(capacity);
    }

    getSize() {
        return this.array.getSize();
    }
    
    isEmpty() {
        return this.array.isEmpty();
    }

    getCapacity() {
        return this.array.getCapacity();
    }

    enqueue(el) {
        this.array.addLast(el);
    }

    dequeue() {
        return this.array.removeFirst();
    }

    getFront() {
        return this.array.getFirst();
    }

    toString() {
        let res = '';
        res += 'ArrayQueue: '
        res += 'front ['
        for(let i = 0; i < this.array.getSize(); i++) {
            res += this.array.get(i);
            if(i !== this.array.getSize() - 1){
                res += ', '
            }
        }
        res += ']tail'

        return res;
    }
}

module.exports = ArrayQueue;