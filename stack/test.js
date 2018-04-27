const Stack = require('./Stack.js')
const print = console.log.bind(this);

const stack = new Stack();
for(let i = 0; i < 5; i++) {
    stack.push(i)
    print(stack.toString());   
}
stack.pop()
print(stack.toString());

// 栈顶元素
print('top: '+ stack.peek())
