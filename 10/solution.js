/*
    10 배열의 평균값: https://school.programmers.co.kr/learn/courses/30/lessons/120817
    
    정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.

    제한사항:
    0 ≤ numbers의 원소 ≤ 1,000
    1 ≤ numbers의 길이 ≤ 100
    정답의 소수 부분이 .0 또는 .5인 경우만 입력으로 주어집니다.
*/
function solution(numbers) {
    let sum = numbers.reduce((acc, cur) => acc + cur);
    return sum / numbers.length;
}