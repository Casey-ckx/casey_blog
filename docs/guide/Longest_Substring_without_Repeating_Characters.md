---
  title : Longest_Substring_without_Repeating_Characters
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
此处填写摘要
:::
## 解题方案

> 思路 1

```javascript
let lengthOfLongestSubstring = function (s) {
    let result = 0;
    for (let i = 0, len = s.length; i < len; i++) {
        let set = new Set();
        set.add(s.charAt(i));
        for (let j = i + 1; j < len; j++) {
            if (set.has(s.charAt(j))) {
                break;
            }
            set.add(s.charAt(j));
        }
        result = Math.max(result,set.size);
    }
    return result;
};
```

