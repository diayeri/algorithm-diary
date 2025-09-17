/**
 * 문제: 2666. Allow One Function Call
 * 난이도: Easy
 * 풀이: 클로저 사용
 * URL: https://leetcode.com/problems/allow-one-function-call/description/?envType=study-plan-v2&envId=30-days-of-javascript
 * 날짜: 2025-09-17
 */

var once = function(fn) {
    let called = false;

    return function(...args){
        if (!called) {
            called = true;
            return fn(...args);
        }
        return undefined;
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */

/**
 클로저 실행 흐름
 1. once(fn) 실행 → called = false 변수가 생성됨
  - 하지만 이 변수는 once 함수가 끝나도 사라지지 않음
  - 왜냐면, return function(...args) 안에서 참조하고 있기 때문
  - 이게 바로 클로저(closure)

 2. 이제 onceFn = once(fn)으로 만들어진 함수(onceFn)는 실행될 때마다
  - 자기 자신이 가진 클로저 환경 속 called 변수를 계속 바라봄
  - 이 덕분에 called 값이 변하면, 다음 호출 때도 그대로 기억함
 */
