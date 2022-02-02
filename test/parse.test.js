import { describe, expect, test } from '@jest/globals';
import { parse } from '../src/lib/parser';

describe('parser', () => {
  it('parses a markdown file', () => {
    const input = `# hello world`;

    const parsed = parse(input);

    console.log('parsed :>> ', parsed);

    expect(parsed).toBe('<h1>hello world</h1>');
  });

});
