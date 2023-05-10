/* ==============================================================
 * [코딩 기초 트레이닝] 문자열 곱하기
 * 출처 : https://school.programmers.co.kr/learn/courses/30/lessons/181940
 *
 * 문자열 my_string과 정수 k가 주어질 때, my_string을 k번 반복한 문자열을 return 하는 solution 함수를 작성해 주세요.
 * ==============================================================
 */

function solution(my_string, k) {
   let answer = "";
   for(let i = 0; i < k; i++){
    answer += my_string;
   }
    return answer;
}


// repeat 함수 활용
function solution2(my_string, k) {
    return my_string.repeat(k)
}

console.log(solution("test", 3));



