/* ==============================================================
 * [코딩 기초 트레이닝] 문자열 정수의 합
 * 출처 : https://school.programmers.co.kr/learn/courses/30/lessons/181849
 *
 * 한 자리 정수로 이루어진 문자열 num_str이 주어질 때, 각 자리수의 합을 return하도록 solution 함수를 완성해주세요.
 * ==============================================================
 */

function solution(num_str) {
    return num_str.split("").reduce((acc,bcc)=> acc+Number(bcc), 0);

}

console.log(solution("123456789"));



