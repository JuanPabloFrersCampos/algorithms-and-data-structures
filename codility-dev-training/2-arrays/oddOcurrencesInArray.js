let array = [7, 8, 7, 7, 7, 9, 9];

//Function that will create an object with the amount of times that an element showed up in an array.
function organizeItems(A){
  var list = {};
  for (element of A){
    if (list[element] == null){
      list[element] = 1;
    }
    else{
      list[element] += 1;
    }
  }
  return list;
}

function solution(A){
  var listOfItems = organizeItems(A);

  for (property in listOfItems){ //>>> Se accede a cada propiedad.
    let value = listOfItems[property]; //>>>> Se accede al valor
    if (value % 2 !== 0) return parseInt(property); //>>> Se devuelve solo la key
  }
}