const Stack = require('./Stack.js')

// 利用栈实现的 
var isValid = function(str) {
    let stack = new Stack();  
    let target = {};
  
    target["("] = ")";
    target["{"] = "}";
    target["["] = "]";

    for(var i = 0; i < str.length; i++) {
        if(stack.isEmpty()) {
            stack.push(str[i]);
        } else {
            let last = stack.peek();
            if(str[i] === target[last]) {
                stack.pop()
            }else {
                stack.push(str[i]);
            }
        }
    }
 
    return stack.isEmpty(); // 栈为空说明匹配成功
}

let test1 = '()[]{}'
let res1 = isValid(test1);
console.log(`${test1} is valid: ${res1}`)

let test2 = '([)]'
let res2 = isValid(test2);
console.log(`${test2} is valid: ${res2}`)

// 利用数组实现另一种方式
var isValidTwo = function(str) {
    var stack = [];
    for(let i = 0; i < str.length; i++) {
        if(str[i] === '(' || str[i] === '{' || str[i] === '[') {
            stack.push(str[i]);
        }else {
            if(!stack.length) {
                return false;
            } 
            var top = stack.pop();

            if(str[i] === ')' && top !== '(') {
                return false
            }

            if(str[i] === '}' && top !== '{') {
                return false
            }

            if(str[i] === ']' && top !== '[') {
                return false
            }
        }
    }

    return !stack.length;
}

console.log(isValidTwo(test1))
console.log(isValidTwo(test2))