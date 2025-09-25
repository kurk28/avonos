import { expect, test } from 'vitest';
import { getBridgeStepCapacity } from '../src/getBridgeStepCapacity.js';

test('should calculate correct step capacity for bridge [10,8,6,4]', () => {
  const mock = [10, 8, 6, 4];

  expect(getBridgeStepCapacity(mock)).toBe(2);
});

test('should calculate correct step capacity for bridge [9,7,5,5,1]', () => {
  const mock = [9, 7, 5, 5, 1];

  expect(getBridgeStepCapacity(mock)).toBe(1);
});

test('should calculate correct step capacity for bridge [11, 10, 9, 8, 7]', () => {
  const mock = [11, 10, 9, 8, 7];

  expect(getBridgeStepCapacity(mock)).toBe(4);
});
