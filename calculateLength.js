/* ==============================================================
 * [코딩 기초 트레이닝] 길이에 따른 연산
 * 출처 : https://school.programmers.co.kr/learn/courses/30/lessons/181879
 *
 * 정수가 담긴 리스트 num_list가 주어질 때, 리스트의 길이가 11 이상이면 리스트에 있는 모든 원소의 합을, 
 * 10 이하이면 모든 원소의 곱을 return하도록 solution 함수를 완성해주세요.
 * ==============================================================
 */

const solution = num_list => num_list.reduce((a,b) => num_list.length > 10 ? a+b : a*b);

console.log(solution([2, 3, 4, 5]));



