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
