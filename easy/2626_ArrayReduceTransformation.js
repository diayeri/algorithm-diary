/**
 * 문제: 2626. Array Reduce Transformation
 * 난이도: Easy
 * 풀이: 이전 결과를 계속 누적하면서 배열 순회 (실제 reduce처럼 구현)
 * URL: https://leetcode.com/problems/array-reduce-transformation/description/?envType=study-plan-v2&envId=30-days-of-javascript
 * 날짜: 2025-09-12
 */

var reduce = function(nums, fn, init) {
    let result = init;
    for (let num of nums) {
        result = fn(result, num)
    }
    return result;
};

// 테스트 예시
console.log(reduce([1,2,3,4], function sum(accum, curr) { return accum + curr * curr; }, 100)); // 130

// 아이디어
/**
let ans0 = fn(init, nums[0]);
let ans1 = fn(ans0, nums[1]);
let ans2 = fn(ans1, nums[2]);
// ...
let ansN = fn(ansN-1, nums[nums.length - 1]);
 */
