/*
    09 짝수의 합:
    정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.

    제한사항:
    0 < n ≤ 1000
*/
function solution(n) {
    let end = n % 2 == 0 ? n : n - 1;
    if (end <= 2) return end;
    return (end + 2) * Math.trunc(end / 4) + (end % 4 != 0 ? Math.trunc(end / 2) + 1 : 0);
}