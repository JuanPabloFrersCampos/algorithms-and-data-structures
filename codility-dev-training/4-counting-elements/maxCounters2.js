
/* Planning:
global var counters = [];

- function initializeCounters => will initialize counters[] with as many elements as solutions(N), with value 0 

- function solution =>
  - let maxCounter = 0;
  - invoque intializeCounters()

  - iterate elements of A. If A[element] <= N{
    counters[element - 1]++;
    if (counters[element -1] > maxCounter)  = maxCounter = counters[element-1]
    }
    else{
      all the elements of counters = maxCounter
    }

  return counters;
*/

var counters;

const initializeCounters = N => {
  //Most efficient way to create an array: https://stackoverflow.com/questions/1295584/most-efficient-way-to-create-a-zero-filled-javascript-array
  //Basically, create the array with a fixed value, and populate it manually, without .fill() method. As shown below.
  counters = new Array(N);
  for (let i=0; i<N; i++){
    counters[i] = 0;
  }
}
function solution (N, A){
  let maxCounter = 0;
  initializeCounters(N);

  for (i=0; i<A.length; i++){
    if (A[i] <= N){
      counters[A[i] - 1]++;
      if (counters[A[i] -1] > maxCounter) maxCounter = counters[A[i] - 1];
    }
    else{
      //It is a LOT MORE EFFICIENT to create a new array with values = maxCounter, instead of modifying each one. 
      //Also is more efficient to iterate through the array manually
      //counters.forEach((element, index) => counters[index] = maxCounter); >> REALLY unefficient way
      for (let i=0; i<N; i++){
        counters[i] = maxCounter;
      }
    }
    
  return counters;
}


/* With the following solution () a 60% in performance is gotten

function solution (N, A){
  let maxCounter = 0;
  initializeCounters(N);

  A.forEach(element => {
    if (element <= N){
      counters[element - 1]++;
      if (counters[element -1] > maxCounter) maxCounter = counters[element - 1];
    }
    else{
      //It is a LOT MORE EFFICIENT to create a new array with values = maxCounter, instead of modifying each one. 
      //Also is more efficient to iterate through the array manually
      //counters.forEach((element, index) => counters[index] = maxCounter); >> REALLY unefficient way
      for (let i=0; i<N; i++){
        counters[i] = maxCounter;
      }
    }
  })

  return counters;
}

*/


var A = [];
A[0] = 3
    A[1] = 4
    A[2] = 4
    A[3] = 6
    A[4] = 1
    A[5] = 4
    A[6] = 4

    console.log(solution(5, A));

/*
You are given N counters, initially set to 0, and you have two possible operations on them:

increase(X) − counter X is increased by 1,
max counter − all counters are set to the maximum value of any counter.
A non-empty array A of M integers is given. This array represents consecutive operations:

if A[K] = X, such that 1 ≤ X ≤ N, then operation K is increase(X),
if A[K] = N + 1 then operation K is max counter.
For example, given integer N = 5 and array A such that:

    A[0] = 3
    A[1] = 4
    A[2] = 4
    A[3] = 6
    A[4] = 1
    A[5] = 4
    A[6] = 4
the values of the counters after each consecutive operation will be:

    (0, 0, 1, 0, 0)
    (0, 0, 1, 1, 0)
    (0, 0, 1, 2, 0)
    (2, 2, 2, 2, 2)
    (3, 2, 2, 2, 2)
    (3, 2, 2, 3, 2)
    (3, 2, 2, 4, 2)
The goal is to calculate the value of every counter after all operations.

Write a function:

function solution(N, A);

that, given an integer N and a non-empty array A consisting of M integers, returns a sequence of integers representing the values of the counters.

Result array should be returned as an array of integers.

For example, given:

    A[0] = 3
    A[1] = 4
    A[2] = 4
    A[3] = 6
    A[4] = 1
    A[5] = 4
    A[6] = 4
the function should return [3, 2, 2, 4, 2], as explained above.

Write an efficient algorithm for the following assumptions:

N and M are integers within the range [1..100,000];
each element of array A is an integer within the range [1..N + 1].
*/
