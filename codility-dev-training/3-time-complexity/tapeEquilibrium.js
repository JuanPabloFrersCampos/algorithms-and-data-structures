A= [1, 4, 5, 8];

function solution(A){
  var totalSumOfArrayElements = 0;
  A.forEach(element => totalSumOfArrayElements += element);
  let maxActualDifference = null;
  let currentSumOfArrayElements = 0;

  for (element of A){
    currentSumOfArrayElements += element;
    let currentElementDifference = Math.abs(currentSumOfArrayElements - 
      (totalSumOfArrayElements - currentSumOfArrayElements));
    if ( currentElementDifference === 0){
      return 0;
    }
    else{
      if (!maxActualDifference || currentElementDifference < maxActualDifference){
        maxActualDifference = currentElementDifference;
      }
    }
  }
  return maxActualDifference;
}

console.log(solution(A));