/*
Will create an object list = {} and will create key/value pairs for each element of A
Iterate A, and if object.hasOwnProperty(A[i]) continue
    if not, create that property, and i++

return i;
*/

function solution(A) {
  let distinctValues = 0;
  var object = {};
  for (let i=0; i<A.length; i++){
      if (object.hasOwnProperty(A[i])) continue;
      else{
          object[A[i]] = true;
          distinctValues++;
      }
  }
  return distinctValues;
}