//This algo works. But it is expensive and not efficient.

//Array with size X, which values will be initialized in false.
//Values will turn true once the frog is able to reach the leaf.
var stepsGiven = []

function hasReachedTarget(){
  if (stepsGiven.some(element => element === false)) return false;
  else return true;
}

function solution(X, A) {
  let secondsPassed = 0;
  let currentElementIndex = 0;
  //Initilization of array that will represent the reached leafs.
  for (let i=0; i<X; i++){
    stepsGiven[i] = false;
  }

  while (!hasReachedTarget() && A.length > currentElementIndex){
    element = A[secondsPassed];
    //Change position element -1 to true because the first step == 1, and the first
    //index in the array is 0
    stepsGiven[element-1] = true;
    secondsPassed++;
    currentElementIndex++;
  }

  if (hasReachedTarget()) return secondsPassed - 1;
  else return -1;

}
let A = [];
  A[0] = 1
  A[1] = 3
  A[2] = 1
  A[3] = 4
  A[4] = 2
  A[5] = 3
  A[6] = 4
  A[7] = 5

  console.log(solution(1, A));
//console.log(hasReachedTarget());






/*Task:
A small frog wants to get to the other side of a river. The frog is initially located on one bank of the river (position 0) and wants to get to the opposite bank (position X+1). Leaves fall from a tree onto the surface of the river.

You are given an array A consisting of N integers representing the falling leaves. A[K] represents the position where one leaf falls at time K, measured in seconds.

The goal is to find the earliest time when the frog can jump to the other side of the river. The frog can cross only when leaves appear at every position across the river from 1 to X (that is, we want to find the earliest moment when all the positions from 1 to X are covered by leaves). You may assume that the speed of the current in the river is negligibly small, i.e. the leaves do not change their positions once they fall in the river.

For example, you are given integer X = 5 and array A such that:

  A[0] = 1
  A[1] = 3
  A[2] = 1
  A[3] = 4
  A[4] = 2
  A[5] = 3
  A[6] = 5
  A[7] = 4
In second 6, a leaf falls into position 5. This is the earliest time when leaves appear in every position across the river.

Write a function:

function solution(X, A);

that, given a non-empty array A consisting of N integers and integer X, returns the earliest time when the frog can jump to the other side of the river.

If the frog is never able to jump to the other side of the river, the function should return −1.

For example, given X = 5 and array A such that:

  A[0] = 1
  A[1] = 3
  A[2] = 1
  A[3] = 4
  A[4] = 2
  A[5] = 3
  A[6] = 5
  A[7] = 4
the function should return 6, as explained above.

Write an efficient algorithm for the following assumptions:

N and X are integers within the range [1..100,000];
each element of array A is an integer within the range [1..X].*/