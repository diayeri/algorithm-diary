/**
 * 문제: 2723. Add Two Promises
 * 난이도: Easy
 * 풀이: 프로미스
 * URL: https://leetcode.com/problems/add-two-promises/description/?envType=study-plan-v2&envId=30-days-of-javascript
 * 날짜: 2025-09-24
 */

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    const p1 = await promise1;
    const p2 = await promise2;
    return p1 + p2;
};
// 참고: 아래도 가능하긴 함
// return await promise1 + await promise2; 

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */

/**
 다른 풀이 참고
 (1) Promise.all 사용 (더 효율적)
 var addTwoPromises = async function(promise1, promise2) {
   const [p1, p2] = await Promise.all([promise1, promise2]);
   return p1 + p2;
 };

 (2) 한 줄로 간단하게 (함수형 스타일, 가독성은 떨어질 수 있지만)
 var addTwoPromises = (p1, p2) =>
   Promise.all([p1, p2]).then(([a, b]) => a + b);
 */
