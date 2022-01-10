/*
Premise: The smallest avg will be found splitting the array in parts of 2 and 3. Spliting
the array between more parts will never contain smaller averages, since all the other
numbers all products of 2 or 3.
*/

function solution(A){
  let actualMiniumSlide = 100001;
  let actualMiniumIndex = null;
  let i = 0;

  for (i; i<A.length - 1; i++){
    if ((A[i] + A[i+1]) / 2 < actualMiniumSlide){
      actualMiniumSlide = (A[i] + A[i+1]) / 2;
      actualMiniumIndex = i;
    }
  }

  for (i=0; i<A.length - 2; i++){
    if ((A[i] + A[i+1] + A[i+2]) / 3 < actualMiniumSlide){
      actualMiniumSlide = (A[i] + A[i+1] + A[i+2]) / 3;
      actualMiniumIndex = i;
    }
  }

  return actualMiniumIndex;
}

let A = []
A[0] = 3
    A[1] = -5
    A[2] = 2
    A[3] = 1
    A[4] = 5
    A[5] = 1
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