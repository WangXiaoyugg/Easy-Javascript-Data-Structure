/**
 * private data 默认存储数组的容量
 * private size 标识当前数组元素的大小
 * public methods 
 */
class MyArray {
   constructor(capacity) {
       if(!capacity) {
           capacity = 10; 
       }
       this.data = new Array(capacity);
       this.size = 0;
    }
    
    getSize() {
        return this.size;
    }

    getCapacity() {
        return data.length;
    }

    isEmpty() {
        return this.size === 0
    }

    add(index, el) {
        // 索引必须是数字
        if(typeof index !== 'number') {
           throw new TypeError('add el fail, index must be a number')     
        }
        // 边界值判断
        if(index < 0 || index > this.size ) {
            throw new RangeError('add el fail, require index must index > 0 and index <= size');
        }

        // 等于capacity, 动态扩容
        if(this.size === this.data.length) {
            this.resize(2 * this.data.length);
        }

        // 整个数组像右移动n位
        for(let i = this.size - 1; i >= index; i--) {
            this.data[i+1] = this.data[i];
        }
        
        this.data[index] = el;
        this.size++;

    }

    addFirst(el) {
        this.add(0,el);
    }

    addLast(el) {
        this.add(this.size, el);
    }

    resize(newCapacity) {
        let newData = new Array(newCapacity);
        for(let i = 0; i < this.data.length; i++){
            newData[i] = this.data[i];    
        }
        this.data = newData;
    }

    get(index) {
        // 索引必须是数字
        if(typeof index !== 'number') {
           throw new TypeError('get el fail, index must be a number')     
        }
        // 边界值判断
        if(index < 0 || index >= this.size ) {
            throw new RangeError('get el fail, require index must index > 0 and index < size');
        }
        return this.data[index];
    }

    set(index, el) {
        // 索引必须是数字
        if(typeof index !== 'number') {
           throw new TypeError('set el fail, index must be a number')     
        }
        // 边界值判断
        if(index < 0 || index >= this.size ) {
            throw new RangeError('set el fail, require index must index > 0 and index < size');
        }
        this.data[index] = el;
    }

    contains(el) {
        // 没有处理对象的相等，有可能要递归比较对象的属性和值
        for(let i = 0; i < this.data.length; i++) {
            if(this.data[i] === el) {
                return true
            }
        }
        return false;
    }

    // 默认是找到的第一个元素的索引
    find(el) {
        for(let i = 0; i < this.data.length; i++) {
            if(this.data[i] === el) {
                return i
            }
        }
        return -1;
    }

    // 删除对应的数组元素，并将其返回
    remove(index) {
        // 索引必须是数字
        if(typeof index !== 'number') {
           throw new TypeError('remove el fail, index must be a number')     
        }
        // 边界值判断
        if(index < 0 || index >= this.size ) {
            throw new RangeError('remow el fail, require index must index > 0 and index < size');
        }

        let ret = this.data[index]
        for(let i= index + 1; i < this.size; i++) {
            this.data[i-1] = this.data[i];
        }
        this.size--;

        // 惰性动态缩容data容量
        // data不能是空数组
        if(this.size === this.data.length / 4 && this.data.length / 2 !== 0) {
            this.resize(this.data.length / 2);
        }
        return ret;
    }

    removeFirst() {
        this.remove(0)
    }

    removeLast() {
        this.remove(this.size - 1);
    }

    // 默认重复删除第一个元素
    removeElement(el) {
        let index = this.find(el);
        if(index !== -1) {
            this.remove(index);
        }
    }

    toString() {
      let result = '';
      result += `Array: size = ${this.size}, capacity = ${this.data.length} \n`
      result += `[`
      for(let i = 0 ; i < this.size; i++) {
          result += this.data[i]
          if(i != this.size - 1) {
              result += ', ';
          }
      }
      result += ']'
      return result; 
    }
}

module.exports = MyArray