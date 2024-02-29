export const sum = (num1, num2) => num1 + num2;
export const sub = (num1, num2) => num1 - num2;
export const mul = (num1, num2) => num1 * num2;
export const div = (num1, num2) => {
  if (num2 === 0) return undefined;
  return num1 / num2;
};
