// Explanation of this code https://stackoverflow.com/questions/38214425/dont-understand-how-codility-countdiv-solution-is-correct (C++ answer)



function solution(A, B, K) {
  if (K === 1){
    return B - A + 1;
  }

  //Lets say that A = 10, B = 20, K = 2;
  //            10       -       5         +        1 (because A is a multiple itself)
  //                        = 6 divisors
  return Math.floor(B/K) - Math.floor(A/K) + (A % K === 0 ? 1 : 0);
}
