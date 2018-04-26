const myArray = require('./Array.js')
const print = console.log.bind(this);

let arr = new myArray();
for(let i = 0; i < 10; i++) {
    arr.addLast(i);
}
print(arr.toString());

arr.add(1, 100);
print(arr.toString());

arr.addFirst(-1);
print(arr.toString());

arr.remove(2);
print(arr.toString());

arr.removeElement(4);
print(arr.toString());

arr.removeFirst();
print(arr.toString());
