/* eslint-disable no-undef */
import { describe, expect } from '@jest/globals';
import { readData } from '../src/lib/read-data';

describe('line array', () => {
  it('creates an array, each index has a line', () => {

    const input = 'data/1.txt';

    const parsed = readData(input);

    const output = [688, 904, 607, 299];

    expect(parsed).toBe(output);
  });

});
