const sumArray = (numArr: number[]): number => {
  let sum: number = 0;
  for (let i: number = 0; i < numArr.length; i++) {
    sum = sum + numArr[i];
  }
  return sum;
};
