/* The array may be empty.
If array.length === 0 -> return 1 (not sure if this is the expected output)
First approach: 
- Create an object. Keys will be from 1 to array.length + 2, value will be initialized as false
- Loop through A, and search for the matching key in the created object, and set its value to true.
- Loop through the object (for...in) and return the first matching key with value false

*/
function solution(A) {
  //If the array is empty
  if (A.length === 0) return 1;
  //Initialization of the object which will be used to determine which element is missing
  var checkList = {};
  for (let i=1; i <= A.length +1; i++){
      checkList[i] = false;
  }

  for (let i=0; i<A.length; i++){
      checkList[A[i]] = true;
  }

  for (element in checkList){
      if (checkList[element] === false){
          return parseInt(element);
      }
  }
}