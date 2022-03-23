// [?] n명의 점수 중에서 80점 이상인 점수의 합계

// 합계 알고리즘 (Sum Algorithm) : 주어진 범위에 주어진 조건에 해당하는 자료들의 합계

// [1] Input(입력) : n명의 점수
var scores = [100, 75, 50, 37, 90, 95];
var sum = 0; // 합게가 담길 그릇
var N = scores.length; // 의사코드

// [2] Process(처리)

for (let i = 0; i < N; i++) {
  if (scores[i] >= 80) {
    // sum = sum + scores[i];
    sum += scores[i];
  }
}

// [3] Output(출력)
console.log(N + "명의 점수 중 80점 이상의 총점 : " + sum);
