/*
Create object list.
Loop A:
    If key of the element that's being looped exists, then ++ it.
    If does not exist, create key/value = 1;
Loop (for...in) through list, if list[element] % 2 != 0:
    Return element -> Check if this works, we want to return only the key.

Test cases:
2,2,2,2,9
2,2,8
8,8,2,2,8
*/

function solution(A) {
  var list = {}

  for (let i=0; i <= A.length; i++){
      if (list.hasOwnProperty(A[i])) list[A[i]] += 1;
      else list[A[i]] = 1;
  }

  for (const element in list){
      if (list[element] % 2 !== 0) return Number.parseInt(element);
  }
}