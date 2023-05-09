/* ==============================================================
 * [코딩테스트 입문] 짝수의 합
 * 출처 : https://school.programmers.co.kr/learn/courses/30/lessons/120831
 *
 * 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.
 * ==============================================================
 */

function solution(n) {
    let answer = 0;
    for(let i = 1; i<=n; i++){
        if(i%2 === 0) {
            answer += i;
        }
    }
    return answer;
}

// 수열을 이용한 풀이
function solution2(n) {
    var half = Math.floor(n/2);
    return half*(half+1);
}

console.log(solution(10));



