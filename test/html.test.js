/* eslint-disable no-undef */
import { describe, expect } from '@jest/globals';
import { makeHTML } from '../src/lib/make-html.js';

describe('html', () => {
  it('creates a html template from an object', () => {

    const statNum = {};
    statNum.var = 32;
    statNum.max = 3;
    statNum.mean = 2;
    statNum.median = 4656;
    statNum.min = 435;
    statNum.std = 345;
    statNum.sum = 345;
    statNum.range = 1;
    statNum.numbers = 123;

    const input = statNum;

    const parsed = makeHTML(input);

    const output = `
  <head>
    <meta charset="utf-8" />
    <title>Gagnavinnsla</title>
    <link rel="stylesheet" href="styles.css">
  </head>

  <body>
    <div class="wrapper">
      <main>
            <section>
              <ul>
                <li>var:${statNum.var}</li>
                <li>max:${statNum.max}</li>
                <li>mean:${statNum.mean}</li>
                <li>median:${statNum.median}</li>
                <li>min:${statNum.min}</li>
                <li>std:${statNum.std}</li>
                <li>sum:${statNum.sum}</li>
                <li>range:${statNum.range}</li>
                <li>gögnin:${statNum.numbers}</li>
              </ul>
            </section>
      </main>
    </div>
  </body>
  `;
    expect(parsed).toBe(output);
  });

});
