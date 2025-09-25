export function average(arr) {
  const na = arr.filter((i) => i > 0);
  const itemAmount = 3
  let min = Number.POSITIVE_INFINITY;
  let i;
  for (i = 0; i + itemAmount <= na.length; i++) {
    const sum = na.slice(i, i + itemAmount).reduce((acc, curr) => acc + curr, 0);
    const avrg = sum / itemAmount;
    min = min > avrg ? avrg : min;
  }
  return min;
}

