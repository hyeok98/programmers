// 평균 알고리즘(Average Algorithm): 주어진 범위에 주어진 조건에 해당하는 자료들의 평균

// [?] n명의 점수 중에서 80점 이상 95점 이하인 점수의 평균

(function () {
  //[1] Input : n명의 성적
  var data = [90, 65, 78, 50, 95];
  var sum = 0; // 합게를 담는 그릇
  var count = 0; //갯수를 담는 그릇
  var N = data.length;
  var result = 0.0;
  //[2] Process
  for (let i = 0; i < N; i++) {
    if (data[i] >= 80 && data[i] <= 95) {
      sum += data[i];
      count++;
    }
  }
  console.log(sum);
  console.log(count);
  result = sum / count;
  //[3] Optput

  console.log("80점 이상 95점 이하인 점수의 평균: " + result);
})();
