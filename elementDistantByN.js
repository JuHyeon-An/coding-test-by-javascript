/* ==============================================================
 * [코딩 기초 트레이닝] n개 간격의 원소들
 * 출처 : https://school.programmers.co.kr/learn/courses/30/lessons/181888
 *
 * 정수 리스트 num_list와 정수 n이 주어질 때, num_list의 첫 번째 원소부터 마지막 원소까지 n개 간격으로 저장되어있는 원소들을 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.
 * ==============================================================
 */

function solution(num_list, n) {
    let answer = [];

    num_list.forEach((num, idx) => {
        console.log(num, idx);

        if(idx%n == 0) answer.push(num);
    })

    return answer;
}

console.log(solution([4, 2, 6, 1, 7, 6], 2)); // 4,6,7