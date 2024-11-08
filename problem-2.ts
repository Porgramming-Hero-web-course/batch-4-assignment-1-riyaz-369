const removeDuplicates = (arr: number[]): Array<number> => {
  let haveDuplicates: number[] = [];

  arr.map((item) => {
    if (!haveDuplicates.includes(item)) {
      haveDuplicates.push(item);
    }
  });

  return haveDuplicates;
};
