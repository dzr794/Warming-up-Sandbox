export const isInteger = ( input:any ):boolean => Number.isInteger(input);


export const arraySum = ( numbersArray:any[] ) => {

  let allIntegersFlag = true;

  numbersArray.forEach(currentValue => {
    allIntegersFlag = allIntegersFlag && isInteger(currentValue);
  });

  if (!allIntegersFlag) return false;

  return numbersArray.reduce( (accumulator:number, currentValue:number) => accumulator + currentValue, 0);
}


export const arraySumV2 = ( numbersArray:any[] ) => {
  let allIntegersFlag = numbersArray.every( element => Number.isInteger(element) );

  if (!allIntegersFlag) return false;

  return numbersArray.reduce( (accumulator:number, currentValue:number) => accumulator + currentValue, 0);
}