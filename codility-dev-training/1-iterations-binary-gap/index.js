function decimalToBinary(decimalNumber){
  return decimalNumber.toString(2);
}

function solution(N) {
    const binaryNumber = decimalToBinary(N);
    //In order to check if the gap is sourrended by 1's:
    let initialOnesurrounding = false;
    let endingOnesurrounding = false;
    //Track the actual gap, and max gape size:
    let actualGap = 0;
    let maxGap = 0;
    //If the actual gap is sourrended by 1's, and is bigger than the actual MaxGap, then
    //
    for (digit of binaryNumber){
        if (digit === '1') initialOnesurrounding = true;
        if (digit === '0'){
            actualGap++;
        }
        else{
            endingOnesurrounding = true;
            if (actualGap > maxGap && initialOnesurrounding && endingOnesurrounding){
                maxGap = actualGap;
            }
            actualGap = 0;
            endingOnesurrounding = false;
        }
    }
    return maxGap;
}