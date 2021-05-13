---
  title : 俩数之和
  date: 2021-5-12 #时间格式 年-月-日
  tags:
    - 深度优先
  author: casey
  location: 广东深圳
  categories:
    - 算法
  keys: #需要文章加密的密码 要加密的话 点击文章加密
    - '123456'
  publish: true #文章是否发布 是:true 否 flase
---
:::tip
俩数之和
:::

## 刷题内容

> 原题连接
* https://leetcode.com/problems/two-sum
> 内容描述
```
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
Example:
Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```
## 解题方案
> 思路 1
******- 时间复杂度: O(N)******- 空间复杂度: O(N)******
算法来源于知乎文章——[趣味算法思想](https://zhuanlan.zhihu.com/p/46223775)
先定义一个Object类型的数据结构obj，它的key为target - numbers[i]（比如数组第一项为2），value为索引。然后每次都看看obj[numbers[i]] 是否存在，如果存在，那我们就找到了这样的一组数据，返回当前索引以及obj[numbers[i]]。
代码：
```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
 var obj = {};
 for(var i=0; i< nums.length;i++) {
 	const item = nums[i];
 	if(obj[item] >= 0) {
 		return [obj[item], i]
 	} else {
 			obj[target - item] = i;
 		}
 	}
 };
 ```

























