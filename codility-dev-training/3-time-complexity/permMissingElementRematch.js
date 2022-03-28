/*
We have a lot of ways to solve this. The most efficient, I think, would be to create an object, loop A, and create the key/value pair with the elements of A.
Then, we will loop the object (i=1; i <= A.length + 1) and return i if !hasOwnProperty
*/

function solution(A) {
  var list = {}
  for (let i=0; i <= A.length; i++){
      list[A[i]] = true; 
  }

  for (i=1; i <= A.length + 1; i++){
      if (!list.hasOwnProperty(i)) return i;
  }
}