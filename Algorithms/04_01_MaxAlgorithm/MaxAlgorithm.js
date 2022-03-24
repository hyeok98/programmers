// [?]  주어진 데이터 중에서 가장 큰 값

// 최대값 알고리즘: 주어진 범위 + 주어진 조건 의 자료들의 가장 큰 값

(function () {
  // [0] Initialize  초기화 영역
  var max = Number.MIN_SAFE_INTEGER; // 숫자 형식의 데이터 중 가장 작은 값으로 초기화
  //   console.log(max);

  // [1] Input
  var numbers = [-2, -5, -4, -7, -1]; // Max : -1
  var N = numbers.length;

  // [2] Process: MAX
  for (let i = 0; i < N; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  // [3] Output
  console.log("최대값: " + max);
})();

// max 라는 변수에 가장 작은 숫자로 정의 해놓고 for문을 돌려서 number[i] 가 max 보다 크면 max에 할당해준다
