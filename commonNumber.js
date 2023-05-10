/* ==============================================================
 * [코딩 기초 트레이닝] 공배수
 * 출처 : https://school.programmers.co.kr/learn/courses/30/lessons/181936
 *
 * 정수 number와 n, m이 주어집니다. number가 n의 배수이면서 m의 배수이면 1을 아니라면 0을 return하도록 solution 함수를 완성해주세요.
 * ==============================================================
 */

function solution(number, n, m) {
    return number%n == 0 && number%m == 0 ? 1 : 0;
}


// 다른 풀이
function solution2(number, n, m) {
  return +!(number % n || number % m);
}

console.log(solution(10,2,5));