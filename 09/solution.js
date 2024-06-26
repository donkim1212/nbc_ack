/*
    09) 짝수의 합: https://school.programmers.co.kr/learn/courses/30/lessons/120831#
    
    정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.

    제한사항:
    0 < n ≤ 1000
*/
function solution(n) {
    let end = (n & 1) == 0 ? n : n - 1;
    if (end <= 2) return end;
    let mult = Math.trunc(end / 4);
    let mid = end % 4 != 0 ? Math.trunc(end / 2) + 1 : 0;
    return (end + 2) * mult + mid;
}