// [?] 주어진 데이터 중에서 가장 작은 짝수 값

// 최솟값 알고리즘: 주어진 범위에 주어진 조건 의 자료들의 가장 작은 값

(function () {
  // [0] Initialize
  var min = Number.MAX_SAFE_INTEGER; // 해당 정수형에서 가장큰 타입으로 담아놓은다

  // [1] Input
  var numbers = [2, 5, 3, 7, 1]; // min => 1  min(짝수) => 2
  var N = numbers.length;

  // [2] Process :MIN
  for (let i = 0; i < N; i++) {
    if (numbers[i] < min && numbers[i] % 2 == 0) {
      min = numbers[i];
    }
  }

  // [3] Output
  console.log("최솟값은: " + min);
})();
