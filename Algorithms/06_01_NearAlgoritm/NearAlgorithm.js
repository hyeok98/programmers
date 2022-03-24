// [?] 원본 데이터 중에서 대상 데이터와 가장 가까운 값

// 근사값 알고리즘 : 가까운 값  -> 차잇값의 절댓값의 최솟값

(function () {
  // [0] Initialize
  var min = 999;
  // [1] Input
  var numbers = [10, 20, 30, 27, 17];
  var target = 25; // target 와 가까운 값
  var near = 0; // 가까운 값 : 27
  var N = numbers.length;
  // [2] Process
  for (let i = 0; i < N; i++) {
    var abs = Math.abs(numbers[i] - target); // 차이값의 절댓값
    if (abs < min) {
      min = abs;
      near = numbers[i]; // 차이값의 절대값의 최솟값일때 값
    }
  }

  // [3] Outpur
  console.log(
    target + " 와/과 가장 가까운 값은: " + near + " (차이: " + min + ")"
  );
})();
