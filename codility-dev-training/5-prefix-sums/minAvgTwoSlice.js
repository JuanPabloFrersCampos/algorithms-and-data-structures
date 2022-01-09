/*
Plan:
  let actualMiniumSlide = Math.abs(A[0] + A[1])
  //In order to store the indexes a linked list is a good option, but it is not worth it in this exercise.
  let indexPositionsOfMiniumSlides = new Array (1);

  for (let i=1; i < A.length - 1; i++){
    if (Math.abs(A[i] + A[i+1]) < actualMiniumSlide){
      actualMiniumSlide = Math.abs(A[i] + A[i+1]);
      indexPositionOfMiniumSlides = new Array (1);
      indexPositionOfMiniumSlides = i;
    }
    else if (Math.abs(A[i] + A[i+1]) == actualMiniumSlide){
      indexPositionOfMiniumSlides = new Array (indexPositionOfMiniumSlides.length + 1);
      indexPositionOfMiniumSlides.push(i);
    }
  }
  return indexPositionOfMiniumSlides;
*/
function solution(A){
  let actualMiniumSlide = Math.abs(A[0] + A[1]);
  let indexPositionsOfMiniumSlides = new Array(1)
  indexPositionsOfMiniumSlides = 0;

  for (let i=1; i < A.length - 1; i++){
    if (Math.abs(A[i] + A[i+1]) < actualMiniumSlide){
      actualMiniumSlide = Math.abs(A[i] + A[i+1]);
      //indexPositionsOfMiniumSlides = new Array (1);
      indexPositionsOfMiniumSlides = i;
    }
    /*else if (Math.abs(A[i] + A[i+1]) == actualMiniumSlide){
      indexPositionsOfMiniumSlides = new Array (indexPositionsOfMiniumSlides.length + 1);
      indexPositionsOfMiniumSlides.push(i);
    }*/
  }
  return indexPositionsOfMiniumSlides;
}
let A = []
A[0] = 8
    A[1] = -2
    //A[2] = 2
    //A[3] = 5
    //A[4] = 5
    //A[5] = 1
    //A[6] = 8

console.log(solution(A));


/*
A non-empty array A consisting of N integers is given. A pair of integers (P, Q), such that 0 ≤ P < Q < N, is called a slice of array A (notice that the slice contains at least two elements). The average of a slice (P, Q) is the sum of A[P] + A[P + 1] + ... + A[Q] divided by the length of the slice. To be precise, the average equals (A[P] + A[P + 1] + ... + A[Q]) / (Q − P + 1).

For example, array A such that:

    A[0] = 4
    A[1] = 2
    A[2] = 2
    A[3] = 5
    A[4] = 1
    A[5] = 5
    A[6] = 8
contains the following example slices:

slice (1, 2), whose average is (2 + 2) / 2 = 2;
slice (3, 4), whose average is (5 + 1) / 2 = 3;
slice (1, 4), whose average is (2 + 2 + 5 + 1) / 4 = 2.5.
The goal is to find the starting position of a slice whose average is minimal.

Write a function:

function solution(A);

that, given a non-empty array A consisting of N integers, returns the starting position of the slice with the minimal average. If there is more than one slice with a minimal average, you should return the smallest starting position of such a slice.

For example, given array A such that:

    A[0] = 4
    A[1] = 2
    A[2] = 2
    A[3] = 5
    A[4] = 1
    A[5] = 5
    A[6] = 8
the function should return 1, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [2..100,000];
each element of array A is an integer within the range [−10,000..10,000].
*/