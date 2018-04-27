const MyArray = require('./Array.js');

/**
 * stack
 * 是数组的子类，继承数组的类
 * 栈支持入栈 和 出栈操作
 * methods getSize, isEmpty, push, pop, peek(返回栈顶元素)
 */
class Stack{
    constructor(){
        this.array = new MyArray();   
    }

    getSize() {
        return this.array.getSize();
    }

    isEmpty() {
        return this.array.isEmpty();
    }

    push(el) {
        this.array.addLast(el);
    }

    pop() {
        return this.array.removeLast();
    }

    peek() {
        return this.array.getLast();
    }

    toString() {
        let res = '';
        res += 'Stack: \n';
        res += '[';
        for(let i = 0; i < this.getSize(); i++) {
            res += this.array.get(i);
            if(i !== this.getSize() - 1) {
                res += ', '
            }
        }
        res += '] top'
        return res;
    }
}

module.exports = Stack