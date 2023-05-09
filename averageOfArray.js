/* ==============================================================
 * [코딩테스트 입문] 배열의 평균값
 * 출처 : https://school.programmers.co.kr/learn/courses/30/lessons/120817
 *
 * (연속된) 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.
 * ==============================================================
 */

function solution(numbers) {

    let answer = numbers.reduce((acc,cur) => {
        return acc + cur;
    });

    return answer;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
