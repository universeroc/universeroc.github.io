---
title: find first missing positive number
date: 2022-01-27T15:11:13+08:00
---

[first-missing-positive](https://leetcode.com/problems/first-missing-positive/)

> Given an unsorted integer array nums, return the smallest missing positive integer.
> You must implement an algorithm that runs in O(n) time and uses constant extra space.

It's a hard question.

```text
Example 1:

Input: nums = [1,2,0]
Output: 3
Example 2:

Input: nums = [3,4,-1,1]
Output: 2
Example 3:

Input: nums = [7,8,9,11,12]
Output: 1

```

The first and second example is quite clear, but the third one the answer is 1, after rethink for a while and read the question again for the `smallest missing positive integer` I figure out why.

As the algorithm should be O(n) and space should be constant so extra helper data structure is not considerable.

> find the minimium and the maximium then check minimium whether bigger than 1 and maximium whether less than nums.length ?

Follow this plan, I wrote the first version solution, it works for some test case but failed for extra most. Even I added more conditional expression, I found the solution became more and more complex and ugly :(

After one hour, I quit and watch someone's solution in JavaScript

```js
var firstMissingPositive = function(nums) {
    const l = nums.length;
    let resVal = l + 1;

    for (let i = 0; i < l; ++i) {
        // i must position at i - 1
        while (nums[i] > 0 && nums[i] <= l && nums[nums[i] - 1] !== nums[i]) {
            [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]]
        }
    }

    for (let i = 0; i < l; ++i) {
        if (nums[i] !== i + 1) {
            resVal = i + 1
            break
        }
    }
    return resVal
};
```

I use this algorithm and pass all test cases.

What's key code of this algorithm?

In my opinion is:

> while (nums[i] > 0 && nums[i] <= l && nums[nums[i] - 1] !== nums[i]) {
>  [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]]
> }

The very three conditions are the key code, positive integer and must less or equal with the maximium value, the most important feature is `it should be positioned at the |value - 1|`

The extra important code is the `exchange` procedure:

```js
[nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]]
```

it equals with:

```js
let t = nums[nums[i] - 1]
nums[nums[i] - 1] = nums[i]
nums[i] = t
```

**An important question for you to think:**
```js
[nums[i], nums[nums[i] - 1]] = [nums[nums[i] - 1], nums[i]]
```
it's OK or not ? Why ?


