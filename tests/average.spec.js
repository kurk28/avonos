import { expect, test } from 'vitest';
import { average } from '../src/average.js';

test('should return correct average for [1, 2, 3, 0, 3, 2, 1]', () => {
  const mock = [1, 2, 3, 0, 3, 2, 1];
  expect(average(mock)).toBe(2);
});

test('should return correct average for [9, 9, 9, 1, 1, 1]', () => {
  const mock = [9, 9, 9, 1, 1, 1];
  expect(average(mock)).toBe(1);
});

test('should return correct average for [9, 1, 9, 2, 9, 1]', () => {
  const mock = [9, 1, 9, 2, 9, 1];
  expect(average(mock)).toBe(4);
});
