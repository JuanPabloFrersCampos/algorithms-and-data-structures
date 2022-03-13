//100% solution

/*
var riverMap = {} -> Map with all the positions the frog must pass
let jumpsDone = 0;

Create an object with all the positions that the frog must pass before arriving to the other side
This object will contain all the keys from 1 to X (representation of the other side of the river)
Each key will be initiated with a value false.

Each A element will be looped:
    if riverMap[A[i]] === true -> continue;
    else{
        riverMap[A[i]] = true;
        jumpsDone++;
        if (jumpsDone === X) return i;
    }

*/

function solution(X, A) {
  //Representation of the river
  var riverMap = {};
  let jumpsDone = 0;

  for (let i=1; i<= X; i++){
      riverMap[i] = false;
  }

  for (let i=0; i<A.length; i++){
      if (riverMap[A[i]] == true) continue;
      else{
          riverMap[A[i]] = true;
          jumpsDone++;
          if (jumpsDone === X) return i;
      }
  }
  //If the program reachs this point, it means that the frog was not able to jump to the other side
  return -1;
}