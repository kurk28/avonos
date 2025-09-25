export function getBridgeStepCapacity(arr) {
  const stepPrice = 2;
  const minimum = arr.reduce(
    (acc, curr) => (acc < curr ? acc : curr),
    Number.POSITIVE_INFINITY
  );
  const stepCapacity = Math.ceil(minimum / stepPrice);
  return stepCapacity;
}
