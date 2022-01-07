
//1-st Check if the array contains at least one positive number. If not, return 1.
//2nd- Create an array appearances with size A.length -1, populate it with value == false
//3rd iterate A with for, set appearances[A[i] - 1] = true;
//4th iterate appearances with for
function solution(A){
  //If no positive numbers are found in A, 1 is returned.
  if (!A.some(element => element > 0)){
    return 1;
  }

  var appearances = new Array(A.length);
  for (let i=0; i < A.length; i++){
    appearances[i] = false;
  }

  for (let i=0; i < A.length; i++){
    if (A[i] < 0) continue;
    appearances[A[i] - 1] = true;
  }

  for (let i=0; i < appearances.length; i++){
    //console.log(appearances);
    if (appearances[i] === false){
      return i + 1;
    }
  }
  //If the function did not return anything at this point, it means that the smallest positiv interger
  //that does not occur in A is A.length;
  //console.log(appearances);
  return A.length + 1;
}

/*
This is a demo task.

Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
*/