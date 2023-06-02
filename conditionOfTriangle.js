/* ==============================================================
 * [코딩테스트 입문] 삼각형의 완성조건 (1)
 * 출처 : https://school.programmers.co.kr/learn/courses/30/lessons/120889
 *
 * 선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.
 * => 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
 * 삼각형의 세 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 세 변으로 삼각형을 만들 수 있다면 1, 만들 수 없다면 2를 return하도록 solution 함수를 완성해주세요.
 * ==============================================================
 */

function solution(sides) {
    // 1. 배열의 최대값 구하기
    const max = Math.max(...sides);

    // 2. 최대값을 제외한 배열 요소의 합
    const sum = sides.reduce((acc, curr) => acc + curr, 0) - max;

    // 3. 최대값과 배열 요소의 합 비교
    const answer = sum > max ? 1 : 2;

    return answer;
}


// sort 함수를 이용한 풀이
function solution2(sides) {
    sides = sides.sort((a,b) => a-b)
    return sides[0]+sides[1] > sides[2] ? 1 : 2;
}

let sides = [1, 2, 3];

console.log(solution(sides));



