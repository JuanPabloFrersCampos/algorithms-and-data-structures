/*
Create an object, there we will track the amount of times a number appears
Return the only odd element
*/

function solution(A) {
  var list = {};
  for (let i=0; i<A.length; i++){
      if (list.hasOwnProperty(A[i])){
          list[A[i]] += 1;
      }
      else{
          list[A[i]] = 1;
      }
  }

  for (const element in list){
      if (list[element] % 2 != 0) return Number.parseInt(element);
  }
}