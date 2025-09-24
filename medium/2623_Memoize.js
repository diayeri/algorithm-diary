/**
 * 문제: 2623. Memoize
 * 난이도: Medium
 * 풀이: 함수를 반환하는 함수(클로저) 이용, 각 호출의 인자(key)와 실행결과(value)를 Map 형태로 저장/캐싱
 * URL: https://leetcode.com/problems/memoize/description/?envType=study-plan-v2&envId=30-days-of-javascript
 * 날짜: 2025-09-24
 */

/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let result = new Map();
    
    return function(...args) {
        let key = [...args].toString();
        if (!result.has(key)) {
            result.set(key, fn(...args))
        }
        return result.get(key);
    }
}
// 참고: 이 문제에서는 toString도 사용 가능했지만, 보통 배열을 문자화 할때는 JSON.stringify가 더 권장됨

/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */
