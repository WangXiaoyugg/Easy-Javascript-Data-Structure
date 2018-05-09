# Javascript 数据结构

##
- 源于慕课网的 玩转 Java 数据结构
- 自我学习，尝试Javascript实现

### 数组
- 不使用数组提供的api
- 实现数组的增删改查

#### 数组方法的时间复杂度分析
- add O(n)
- addLast O(1)
- addFirst O(n)
- remove O(n)
- removeLast O(1)
- removeFirst O(n)
- removeElment O(n)
- find, contains, O(n)
- get, set O(1)

#### 动态数组的扩容和缩容
- 不使用均摊复杂度分析，扩容的复杂度在 边界值 size 时， 复杂度为 O(n)
- 缩容数组采用惰性方式，分摊时间复杂度，即使边界值为 size时， 复杂度为 O(1)

#### 数组小结
- 数组的增加和删除，复杂度为O(n)
- 增加或删除，若在数组的尾项，即不用循环使数组左移或右移，复杂度为 O(1)
- 数组的get,set利用索引， 时间复杂度为 O(1)
- 数组的查找，利用循环比较，时间复杂度为 O(n)

### 栈
- 栈是数组的子类
- 栈的应用
  1. 编辑器的撤销操作
  2. 操作系统的系统栈，保存系统运行的上下文
  3. 括号的匹配，[leetCode 第20题](https://leetcode-cn.com/problems/valid-parentheses/description/)
- 栈的操作
  1. push O(1)
  2. pop O(1)
  3. peek O(1)
  4. getSize O(1)
  5. isEmpty O(1)

### 队列
- 数组队列
  1. 数组队列操作
    - enqueue O(1)
    - dequeue O(n)
    - getFront O(1)
    - getSize O(1)
    - isEmpty O(1)
- 循环队列
  1. 循环队列操作
    - enqueue O(1) 均摊
    - dequeue O(1) 均摊
    - getFront O(1)
    - getSize O(1)
    - isEmpty O(1)
  2. 循环队列的条件
    - tail === front 队列为空
    - (tail + 1) % data.length === front  队列已满
    - 循环队列会有意浪费一个空间，所以capactity + 1;
    - tail = (tail + 1) % data.length
    - front = (front + 1) % data.length

- 循环队列和数组队列的比较
  1. 循环队列的在操作数越大，性能越好
  2. 循环队列的出队是O(1), 数组组队列是O(n);


## 算法

### 检索算法
- 顺序查找 (无序数组)
  1. 自组织方式顺序查找
  2. 找最大
  3. 找最小

- 二分查找 (有序数组)
  1. 计算重复元素
  2. 寻找第 k 小元素
- 顺序查找和二分查找的性能对比
  1. 数据量大, 二分查找性能好
  2. 数据量小, 顺序查找性能好