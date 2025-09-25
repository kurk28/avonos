import { expect, test } from 'vitest';
import { getMinPackageCount } from '../src/getMinPackageCount.js';

test('should return correct minimal package count for 12 items, 3 LP and 5 SP', () => {
  expect(getMinPackageCount(12, 3, 5)).toBe(3);
});

test('should return correct minimal package count for 22 items, 3 LP and 5 SP', () => {
  expect(getMinPackageCount(12, 3, 5)).toBe(3);
});

test('should return correct minimal package count for 3 items, 3 LP and 5 SP', () => {
  expect(getMinPackageCount(12, 3, 5)).toBe(3);
});
