class LoopQueue {
    constructor(capacity) {
        if(!capacity) capacity = 10
        this.data = new Array(capacity + 1); // 有意的浪费一个空间，所以要 +1
        this.front = 0;
        this.tail = 0;
        this.size = 0; // 队列中有多少个元素
    }

    getCapacity() {
        return this.data.length - 1;
    }

    isEmpty() {
        return this.front === this.tail;
    }

    getSize() {
        return this.size;
    }

    enqueue(el) {
        // 队列已满
        if((this.tail + 1) % this.data.length === this.front) {
            this.resize(this.getCapacity() * 2);
        }
        this.data[this.tail] = el;
        this.tail = (this.tail + 1) % this.data.length;
        this.size++;
    }

    dequeue(el) {
        if(this.isEmpty()) {
            throw new RangeError('can"t dequeue  from an empty quue')
        }
        let ret = this.data[this.front];
        this.data[this.front] = null;
        this.front = (this.front + 1) % this.data.length;
        this.size--;
        
        if(this.size === Math.floor(this.getCapacity() / 4 ) && this.getCapacity() / 2 !== 0) {
            this.resize(this.getCapacity() / 2)
        }
        
        return ret;
    }

    getFront() {
        if(this.isEmpty()) {
            throw new RangeError('can"t dequeue  from an empty quue')
        }
        return this.data[this.front]
    }
    
    resize(newCapacity) {
        let newData = new Array(Math.floor(newCapacity + 1));// 浪费一个 加一个
        for(let i = 0; i < this.size; i++) {
            newData[i] = this.data[(i + this.front) % this.data.length]
        }
        this.data = newData;
        this.front = 0;
        this.tail = this.size;
    }


    toString() {
      let result = '';
      result += `LoopQueue: size = ${this.size}, capacity = ${this.getCapacity()} \n`
      result += `front [`
      for(let i = this.front ; i != this.tail; i = (i + 1) % this.data.length) {
          result += this.data[i]
          if((i + 1) % this.data.length !== this.tail) {
              result += ', ';
          }
      }
      result += '] tail'
      return result; 
    }
}

module.exports = LoopQueue