/* ==============================================================
 * [코딩테스트 입문] 숫자 비교하기
 * 출처 : https://school.programmers.co.kr/learn/courses/30/lessons/12912z
 *
 * 정수 num1과 num2가 매개변수로 주어집니다. 두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수를 완성해주세요.
 * ==============================================================
 */

function solution(num1, num2) {
    let answer = num1 === num2 ? 1 : -1;
    
    return answer;
}

console.log(solution(2,3));



