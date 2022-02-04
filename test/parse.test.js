/* eslint-disable no-undef */
import { describe, expect } from '@jest/globals';
import { parse } from '../src/lib/parser';

describe('parser', () => {
  it('parses a text into int.', () => {
    const input = '23#number';

    const parsed = parse(input);

    expect(parsed).toBe(23);
  });

  it('does not parse a NaN.', () => {
    const input = 'test';

    const parsed = parse(input);

    expect(parsed).toBe(0);
  });

});
