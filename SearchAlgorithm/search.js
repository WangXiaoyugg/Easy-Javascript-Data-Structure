class Search {
    constructor(){
        this.randomArray = [];
    }

    SequentialSearch(array, target) {
        for(let i = 0; i < array.length;i++) {
            if(array[i] === target){
                return true
            } else if (typeof array[i] === 'object' && typeof target === 'object') {
               let temp = this.isEqual(array[i], target);
               if(temp) {
                   return true
               }    
            }
        }
        return false;
    }

    //  只支持 Object ,Array
    isEqual(object, target) {
        if(Object.prototype.toString.call(object) === '[object Array]') {
            return this.isSameArray(object, target)
        }

        if(Object.prototype.toString.call(object) === '[object Object]') {
            return this.isSameObject(object, target)
        }
    }

    isSameArray(array, target) {
        if(array.length === 0 && target.length === 0) return true;
        if(array.length !== target.length) return false;

        for(let i = 0; i < target.length; i++) {
            if(typeof target[i] === 'object' && typeof array[i] === 'object') {
                let ret = this.isEqual(array[i], target[i])
                if(!ret) return false;
            } else if(target[i] !== array[i]) {
                return false;
            }
        }

        return true;
    }

    isSameObject(array, target) {
        if(target === null) return false;
        let arrayKeys = Object.keys(array);
        let targetKeys = Object.keys(target);

        if(arrayKeys.length !== targetKeys.length) return false;
        if(arrayKeys.length === 0 && target.length === 0) return true;
        for(let i = 0; i < targetKeys.length; i++) {
            if(targetKeys[i] !== arrayKeys[i]) return false;

            if(typeof target[targetKeys[i]] === 'object' && typeof array[arrayKeys[i]] === 'object') {
                let ret = this.isEqual(array[arrayKeys[i]], target[targetKeys[i]])
                if(!ret) return false;
            } else if (target[targetKeys[i]] !== array[arrayKeys[i]]) {
                return false;
            }
            
        }

        return true;
    }

    genRandomArray(number) {
        for(var i=0;i < number; i++) {
            let num = Math.floor(Math.random() * number +1 );
            this.randomArray.push(num)
        }
    }

    displayRandomArray() {
        let result = '';
        for(let i = 0; i < this.randomArray.length; i++) {
            if( i % 10 === 9) {
                result += this.randomArray[i] + '\n';
            }
            result += this.randomArray[i] + ' ';
            
        }
        return result;
    }

    // 不支持元素是对象, 数组
    findEl(array, target) {
        for(var i = 0; i < array.length; i++) {
            if(array[i] === target) {
                return i;
            }
           
        }
        return -1;
    }
    
    // 数组不能为空，并且元素为 number
    findMin() {
        let min = this.randomArray[0];
        for(let i = 1; i < this.randomArray.length; i++) {
            if(this.randomArray[i] < min) {
                min = this.randomArray[i]
            }
        }
        return min;
    } 

    // 数组不能为空，并且元素为 number
    findMax() {
        let max = this.randomArray[0];
        for(let i = 1; i < this.randomArray.length; i++) {
            if(this.randomArray[i] > max) {
                max = this.randomArray[i]
            }
        }
        return max;
    }

    // 自组织方式顺序查找，遵循80-20原则，不支持对象
    selfOrganizeSeqSearch(array,target) {
        if(!Array.isArray(array)) throw new TypeError('array is not a Array Type')
        for(let i = 0; i < array.length; i++) {
            if(array[i] === target) {
               if(i > 0) this.swap(array, i, i - 1);
               console.log(array)
               return true;     
            }
            
        }
        return false;
    }

    swap(arr, index1, index2) {
        [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    }

    // 起始位置元素只在距离起始位置一定范围之外的元素进行交换
    optimizeSelfOrganizeSeqSearch(array, target ) {
        if(!Array.isArray(array)) throw new TypeError('array is not a Array Type')
        let distance = Math.floor(array.length * 0.2)
        for(let i = 0; i < array.length; i++) {
            if(array[i] === target ) {
               if(i > distance) this.swap(array, i, 0);
               console.log(array)
               return true;     
            }
            
        }
        return false;
    }

    // 只支持有序的数组，元素是数字
    binarySearch(array, target) {
        if(!Array.isArray(array)) throw new TypeError('array is not a Array Type')
        // 未排序的数组 变成排序过的数组
        array = this.sortArray(array)
        // console.log('sort array', array);
        let left = 0;
        let right = array.length - 1;
        
        while (left <= right) {
            let mid = Math.floor((left + right) / 2)
            console.log('重新计算的中点', mid)
            if(array[mid] > target) {
                right = mid -1;
            } else if (array[mid] < target) {
                left = mid + 1;
            } else {
                return mid;
            }
        }

        return -1;

    }

    sortArray(array) {
        if(typeof array[0] === 'string') {
            return this.intersectionSort(array)
        }
        return array.sort((a,b) => a-b);
    }

    intersectionSort(array) {
        let temp, inner;
        for(let outer = 1; outer <= array.length - 1; outer++) {
            temp = array[outer];
            inner = outer;
            while(inner > 0 && (array[inner - 1] >= temp)) {
                array[inner] = array[inner-1]
                inner--;
            }
            array[inner] = temp;
        }
        return array;
    }

    // 计算数字的重复次数, 双循环分别对数据集向下或向左遍历 
    count(array, target) {
        let count = 0;
        let position = this.binarySearch(array, target)
        if(position > -1) {
            ++count;
            for(var i = position - 1; i > 0; --i) {
                if(array[i] === target) {
                    ++count;
                } else {
                    break;
                }
            }

            for(var i = position + 1; i < array.length; ++i) {
                if(array[i] === target) {
                    ++count;
                } else {
                    break;
                } 
            }
        }

        return count;
    }

    // 顺序查找匹配到最后一个元素
    findLastEl(array, target) {
        for(let i = array.length -1; i >= 0 ; i--) {
            if(array[i] === target){
                return i
            }
        }
        return -1;
    }
}

module.exports = Search;