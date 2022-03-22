/*
1st: Calculate the distance to travel (Y-X)
2nd: Calculate the amount of jumps required Math.ceil(distance / D) and return it

Test case: x=1, y=1
*/

function solution(X, Y, D) {
  let distanceToTravel = Y - X;
  let jumpsRequired = Math.ceil(distanceToTravel / D);
  return jumpsRequired;
}