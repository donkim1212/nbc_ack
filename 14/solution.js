/*
    14 약수의 합:
    정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

    제한 사항
    n은 0 이상 3000이하인 정수입니다.
*/
function solution(n) {
    if (n <= 1) return n;
    let arr = new Array(n + 1);
    let sum = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] == true) break;
        if (n % (i) == 0){
            sum += i;
            if (i != n / i) sum += n / i;
            arr[i] = true;
            arr[n / i] = true;
        }
    }
    return sum;
}