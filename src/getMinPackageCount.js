const LARGE_PACKAGE_SIZE = 5;
const SMALL_PACKAGE_SIZE = 1;

export function getMinPackageCount(items, lpCount, spCount) {
  if (items > lpCount * LARGE_PACKAGE_SIZE + spCount * SMALL_PACKAGE_SIZE)
    return -1;

  const lpAmount = Math.ceil(items / LARGE_PACKAGE_SIZE);
  if (lpAmount <= lpCount) return lpAmount;

  return items - lpCount * LARGE_PACKAGE_SIZE + lpCount;
}
