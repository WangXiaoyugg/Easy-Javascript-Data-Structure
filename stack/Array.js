class MyArray {
    constructor(capacity) {
       if(!capacity) capacity = 10
       this.data = new Array(capacity);
       this.size = 0     
    }

    getSize() {
        return this.size;
    }

    getCapacity() {
        return this.data.length
    }

    isEmpty() {
        return this.size === 0
    }

    add(index, el) {
        if(typeof index !== 'number'){
            throw new TypeError('index must be a Number')
        }
        if(index < 0 || index > this.size) {
            throw new RangeError('Range Error(index > 0  || index <= size )')
        }

        if(this.size === this.data.length) {
            this.resize(2 * this.data.length)
        }

        for(let i = this.size - 1; i >= index; i--) {
            this.data[i+1] = this.data[i]
        }

        this.data[index] = el
        this.size++
    }

    addFirst(el) {
        this.add(0, el)
    }

    addLast(el) {
        this.add(this.size, el);
    }

    resize(capacity) {
        let newData = new Array(Math.floor(capacity));
        for(let i = 0; i < this.data.length; i++) {
            newData[i] = this.data[i]
        }
        this.data = newData
    }

    get(index) {
        if(typeof index !== 'number') {
            throw new TypeError('index must be number')
        }

        if(typeof index < 0 || index >= this.size) {
            throw new RangeError('index > 0  && index < this.size');
        }

        return this.data[index]
    }

    getFirst() {
        return this.get(0)
    }

    getLast() {
        return this.get(this.size - 1);
    }

    set(index, el) {
        if(typeof index !== 'number') {
            throw new TypeError('index must be number')
        }

        if(typeof index < 0 || index >= this.size) {
            throw new RangeError('index > 0  && index < this.size');
        }

       this.data[index] = el;
    }

    contains(el) {
        for(let i = 0; i < this.data.length; i++) {
            if(this.data[i] === el){
                return true
            }
        }
        return false
    }

    find(el) {
        for(let i = 0; i < this.data.length; i++) {
            if(this.data[i] === el) {
                return i
            }
        }
        return -1;
    }

    remove(index) {
        if(typeof index !== 'number') {
            throw new TypeError('index must be number')
        }

        if(index < 0 || index >= this.size) {
            throw new RangeError('index > 0 || index < size')
        }

        let ret = this.data[index]

        for(let i = index + 1; i < this.size; i++) {
            this.data[i -1] = this.data[i]
        }
        
        this.size--;

        if(this.size === this.data.length / 4 && this.data.length / 2 !== 0) {
            this.resize(this.data.length / 2)    
        }        
        return ret;
    }

    removeFirst() {
        this.remove(0)
    }

    removeLast() {
        this.remove(this.size - 1);
    }

    removeElement(el) {
        let index = this.find(el);
        if(index !== -1) {
            this.remove(index);
        }
    }

    toString() {
        let result = '';
        result += `Array: size = ${this.size}, capacity = ${this.data.length} \n`
        result += '['
        for(let i = 0; i < this.size; i++) {
            result += this.data[i]
            if(i !== this.size - 1){
                result += ', '
            }
        }

        result += ']'
        return result;
    }
}

module.exports = MyArray;