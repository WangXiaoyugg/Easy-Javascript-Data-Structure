class MyArray {
    constructor(capacity) {
        if(!capacity) capacity = 10;
        this.data = new Array(capacity);
        this.size = 0;
    }

    getSize() {
        return this.size;
    }

    getCapacity() {
        return this.data.length;
    }

    isEmpty() {
        return this.size === 0;
    }

    add(index, el) {
        if(typeof index !== 'number') throw new TypeError('index is not a number')
        if(index < 0 || index > this.size) throw new RangeError('index > 0 && index <= size')
    
        if(this.size === this.data.length) {
            this.resize(2 * this.data.length);
        }
        
        for(let i = this.size -1; i >= index; i--) {
            this.data[i+1] = this.data[i];
        }
        this.data[index] = el;
        this.size++;
    }

    resize(newCapacity) {
        let newData = new Array(Math.floor(newCapacity));
        for(let i = 0; i < this.data.length; i++){
            newData[i] = this.data[i];    
        }
        this.data = newData;
    }

    
    addFirst(el) {
        this.add(0,el)
    }

    addLast(el) {
        this.add(this.size, el)
    }

    get(index) {
        if(typeof index !== 'number') throw new TypeError('index is not a number')
        if(index < 0 || index >= this.size) throw new RangeError('index > 0 && index < size')
        return this.data[index]
    }

    getFirst(){
        return this.get(0)
    }

    getLast() {
        return this.get(this.size - 1);
    }

    set(index, el) {
        if(typeof index !== 'number') throw new TypeError('index is not a number')
        if(index < 0 || index >= this.size) throw new RangeError('index > 0 && index < size')
        this.data[index] = el
    }

    setFirst(el) {
        this.set(0, el)
    }

    setLast(el) {
        this.set(this.size - 1, el)
    }

    contains(el) {
        for(var i = 0; i < this.data.length; i++) {
            if(el === this.data[i]) {
                return true;
            }
        }
        return false;
    } 

    find(el) {
        for(var i =0; i < this.data.length; i++) {
            if(this.data[i] === el) {
                return i
            }
        }
        return -1;
    }

    
    remove(index) {
        if(typeof index !== 'number') throw new TypeError('index is not a number')
        if(index < 0 || index >= this.size) throw new RangeError('index > 0 && index < size')
        let ret = this.data[index];
        for(var i = index + 1; i < this.data.length; i++) {
            this.data[i-1] = this.data[i];
        }

        this.size--;
        if(this.size === this.data.length /4 && this.data.length / 2 !== 0) {
            this.resize(2 * this.data.length);
        }

        return ret;
    }

    removeFirst() {
        this.remove(0)
    }

    removeLast() {
        this.remove(this.size -1);
    }

    removeElement(el) {
        let index = this.find(el)
        if(index !== -1) {
            this.remove(index)
        }
    }

    toString() {
        let res = ''
        res += `Array : capacity is ${this.data.length}, size is ${this.size} \n`
        res += '['
        for(var i = 0; i < this.size; i++) {
            res += this.data[i]
            if(i !== this.size - 1){
                res += ', '
            }
        }
        res += ']'
        return res
    }
}


module.exports = MyArray