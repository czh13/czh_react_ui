export const pxToNumber = (value: string) => {
  const num = parseFloat(value); //可以将字符串转化为数字，例如24px,24$
  return isNaN(num) ? 0 : num;
};
