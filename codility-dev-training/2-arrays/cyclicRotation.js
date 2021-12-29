const calculateNewPositionInArray = (shifts, currentPosition, arraySize) => {
  if (shifts + currentPosition < arraySize){
      return shifts + currentPosition;
  }
  else{
      return (currentPosition + shifts) % arraySize;
  }
}

function solution(A, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  const arrayLength = A.length;
  let actualIndex=0;
  let temporalArray= [];
  for (element of A){
      const newPositionInArray = calculateNewPositionInArray(K, actualIndex, arrayLength);
      temporalArray[newPositionInArray] = element;
      actualIndex++;
  }
  A = temporalArray;
  return A;
}