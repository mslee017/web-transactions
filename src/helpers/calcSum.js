export const calcSum = arr => {
  return arr.reduce((acc, current) => acc + current.amount, 0);
};
