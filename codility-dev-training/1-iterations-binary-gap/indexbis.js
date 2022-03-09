// Variables: var maxGap = 0, let actualGap = 0, binaryRepresentation;
// 1st: Convert N to binary (N is a positive integer, so checks won't be needed)
// 2nd: Loop through binaryRepresentation. 
/*  If element == 1 && actualGap > 0 => maxGap = actualGap;
    else if element == 0 => actualGap++;
//
*/

function solution(N) {
  var maxGap = 0;
  let actualGap = 0;
  const binaryRepresentation = N.toString(2);
  console.log(binaryRepresentation)
  //Loop through the hole binaryRepresentation
  for (let i = 0; i < binaryRepresentation.length; i++){
      if (binaryRepresentation[i] == 1 && actualGap > 0){
          if (actualGap > maxGap) maxGap = actualGap;
          actualGap = 0;
          //Bigger gaps can't take place
          if (maxGap > binaryRepresentation.length / 2) break;
      }
      else if (binaryRepresentation[i] == 0) actualGap++;
  }
  return maxGap;
}