/*
https://sebhastian.com/merge-sort-javascript/#:~:text=To%20implement%20merge%20sort%20using%20JavaScript%2C%20you%20need%20to%20first,starting%20from%20the%20smallest%20element.&text=With%20that%2C%20you%20have%20the,for%20the%20merge%20sort%20ready.
The idea is to split each element of the array 


*/


function mergeSort(array) {
  const half = array.length / 2
  
  // Base case or terminating case
  if(array.length < 2){
    return array 
  }
  
  const left = array.splice(0, half)
  return merge(mergeSort(left),mergeSort(array))
}

function merge(left, right) {
  let arr = []
  // Break out of loop if any one of the array gets empty
  while (left.length && right.length) {
      // Pick the smaller among the smallest element of left and right sub arrays 
      if (left[0] < right[0]) {
          arr.push(left.shift())  
      } else {
          arr.push(right.shift()) 
      }
  }
  
  // Concatenating the leftover elements
  // (in case we didn't go through the entire left or right array)
  return [ ...arr, ...left, ...right ]
}

let disorderedArray = [5,8,3,9,1,2]
mergeSort(disorderedArray)