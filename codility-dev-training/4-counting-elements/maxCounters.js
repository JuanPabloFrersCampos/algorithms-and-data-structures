var counter = [];

const initializeArray = N => {
  for (let i=0; i<N; i++){
    counter[i] = 0;
  }
}

function solution(N,A){
  var maxValue = 0;
  initializeArray(N);

  for (element of A){
    if (element <= N){
      counter[element-1]++;
      if (counter[element-1] > maxValue) maxValue = counter[element-1];
    }
    else if (element === N+1){
      counter.forEach((element, index) => counter[index] = maxValue);
      //THIS IS WRONG: counter.forEach((element, index) => counter[element] = maxValue);
    }
  }

  return counter;
}
var A = [];
var N = 5;
A[0] = 3
A[1] = 4
A[2] = 4
A[3] = 6
A[4] = 1
A[5] = 4
A[6] = 4

console.log(solution(N, A));