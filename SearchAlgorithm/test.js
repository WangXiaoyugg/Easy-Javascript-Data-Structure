const Search = require('./search.js')

// const arr = [0,{a:1,c:[1,2,{x:10}]}, true, null,[10,{a:2,b:2},[1,2]]]

let search = new Search();
// console.log(search.SequentialSearch(arr, 0)); // true
// console.log(search.SequentialSearch(arr, {a:1, c:[1,2,{x:10}]})); // true,
// console.log(search.SequentialSearch(arr, true)); // true
// console.log(search.SequentialSearch(arr, null)); // true
// console.log(search.SequentialSearch(arr, [10,{a:2,b:1},[1,2]])); // true ,

// search.genRandomArray(100);
// console.log(search.displayRandomArray());

// console.log(search.findEl(arr, 0));
// console.log(search.findEl(arr, -1));
// console.log(search.findMax())
// console.log(search.findMin())
// console.log(search.displayRandomArray())

// const arr = [5,1,7,4,2,10,9,3,6,8,3,3,3]
// console.log(arr)
// // for(let i = 1; i <= 3; i++) {
// //     console.log(search.selfOrganizeSeqSearch(arr, 4))
// // }

// console.log(arr)
// for(let i = 1; i <= 3; i++) {
//     console.log(search.optimizeSelfOrganizeSeqSearch(arr, 1))
// }

// console.log(arr);
// console.log(search.binarySearch(arr, 6));
// console.log(search.binarySearch(arr, 100));

// console.log(arr)
// console.log(search.count(arr, 3))
// console.log(search.count(arr, 100))

const template = `The nationalism of Hamilton was undemocratic. The democracy of Jefferson was,
     in the beginning, provincial. The historic mission of uniting nationalism and
     democracy was in the course of time given to new leaders from a region beyond
     the mountains, peopled by men and women from all sections and free from those
     state traditions which ran back to the early days of colonization. The voice
     of the democratic nationalism nourished in the West was heard when Clay of
     Kentucky advocated his American system of protection for industries; when
     Jackson of Tennessee condemned nullification in a ringing proclamation that
     has taken its place among the great American state papers; and when Lincoln
     of Illinois, in a fateful hour, called upon a bewildered people to meet the
     supreme test whether this was a nation destined to survive or to perish. And
     it will be remembered that Lincoln's party chose for its banner that earlier
     device--Republican--which Jefferson had made a sign of power. The "rail splitter"
     from Illinois united the nationalism of Hamilton with the democracy of Jefferson,
     and his appeal was clothed in the simple language of the people, not in the
     sonorous rhetoric which Webster learned in the schools`


// let words = template.replace(/[,.\n"';]/g,'').split(' ').filter(item => item !== '');

// let testWords = 'appeal'

// function testSearchSpendTime(words, testWords, type) {
//     let start = new Date().getTime()
//     let position
//     if(type === 0) {
//         position = search.findEl(words, testWords)
//     } else {
//         position = search.binarySearch(words, testWords);
//     }
//     let end =  new Date().getTime()
//     let elapsed = end - start;
//     if(position >= 0) {
//         console.log(`单词 ${testWords} 被查找的位置在 ${position}`)
//         console.log(`顺序查找消耗了 ${elapsed} 毫秒`)
//     } else {
//         console.log(`此 ${testWords} 没有出现在这个文件中`)
//     }
// }

// testSearchSpendTime(words, testWords, 0);
// testSearchSpendTime(words, testWords, 1);

// const arr = [1,2,5,6,7,2]
// console.log(search.findLastEl(arr, 2));

// 数据量越大， 二分查找越快

// 如何在数组中查找第 n 小的元素
// 思路， 数组排序后，直接去 arr[n-1]的索引

// 寻找数组中第 K 大的元素
// http://www.cnblogs.com/wintersweetwang/p/4380810.html

// [Smin, Smax] X, b

