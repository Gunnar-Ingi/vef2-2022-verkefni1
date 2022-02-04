import { createReadStream } from 'fs';
import { createInterface } from 'readline';
import { parse } from './parser.js';

/**
 * Scans a file line by line
 * @param {file} input
 * @returns array containing a line in each index.
 */
export function readData(input) {

  async function processLineByLine() {
    const fileStream = createReadStream(input);
    const writtenData = [];

    const rl = createInterface({
      input: fileStream,
      crlfDelay: Infinity
    });


    for await (const line of rl) {
      writtenData.push(parse(line));
    }

    return writtenData;
  }

  return processLineByLine();
}
