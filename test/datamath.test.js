/* eslint-disable no-undef */
import { describe, expect } from '@jest/globals';
import { calculateNum } from '../src/lib/data-math.js';

describe('numbers', () => {
  it('creates an object containing various statistics', () => {

    const numArr = [3, 29, 37];

    const input = numArr;

    const parsed = calculateNum(input);

    const output = 0;

    expect(parsed).toBe(output);
  });

  it('detects an undefined', () => {

    const numArr2 = undefined;

    const input = numArr2;

    const parsed = calculateNum(input);

    const output = 0;

    expect(parsed).toBe(output);
  });

});
