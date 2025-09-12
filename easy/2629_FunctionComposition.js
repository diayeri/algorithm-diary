/**
 * 문제: 2629. Function Composition
 * 난이도: Easy
 * 풀이: 이전 결과를 계속 누적하면서 배열 순회 (이전 풀이에서 reverse만 추가로 사용)
 * URL: https://leetcode.com/problems/function-composition/description/?envType=study-plan-v2&envId=30-days-of-javascript
 * 날짜: 2025-09-13
 */

var compose = function(functions) {
    return function(x) {
        let result = x;
        for (let func of functions.reverse()) {
            result = func(result);
        }
        return result;
    }
};

// 참고: reduceRight를 활용한 더 간단한 풀이
var compose = function(functions) {
    return function(x) {
        return functions.reduceRight((acc, fn) => fn(acc), x);
    };
};
