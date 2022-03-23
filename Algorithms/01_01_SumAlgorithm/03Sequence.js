// [?] 1부터 20까지의 정수 중 홀수의 합을 구하는 프로그램

// 1,3,5,7,9, ...

// 등차수열(Arithmetic Sequence) : 연속하는 두 수의 차이가 일정한 수열  (홀수)?

// [1] input
var sum = 0; // 합계가 담길 그릇

// [2] Process
var sequence = "";
for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    sum += i;
    sequence += i + " ";
  }
}

console.log(sequence);

// [3] Output
console.log("1부터 20까지의 홀수 합은: " + sum);
