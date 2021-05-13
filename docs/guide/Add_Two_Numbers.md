---
  title : Add Two Numbers
  date: 2021-5-12 #时间格式 年-月-日
  tags:
    - 文章标签
  author: casey
  location: 广东深圳
  categories:
    - 算法
  keys: #需要文章加密的密码 要加密的话 点击文章加密
  publish: true #文章是否发布 是:true 否 flase
---
:::tip
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
:::
#### Example:

    Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
    Output: 7 -> 0 -> 8
    Explanation: 342 + 465 = 807.

## 解题方案

> 思路 1
******- 时间复杂度: O(max(m,n))******- 空间复杂度: O(max(m,n))******
```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let addTwoNumbers = function (l1,l2) {
	let result = new ListNode(0),
		node = result;
	while(l1 || l2){
		let r = node.val,
		i = (l1 && l1.val) || 0,
		j = (l2 && l2.val) || 0,
		sum = r + i + j,
		m,n;
	if(sum >= 10){
		m = 1;
		n = sum - 10;
	}else{
		m = 0;
		n = sum;
	}
``
