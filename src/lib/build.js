/* eslint-disable no-await-in-loop */
import { join } from 'path';
import { writeFile, readdir } from 'fs/promises';
import { readData } from './read-data.js';
import { makeHTML } from './make-html.js';
import { calculateNum } from './data-math.js';

const DATA_DIR = './data';
const OUTPUT_DIR = './dist';

async function main() {
  const files = await readdir(DATA_DIR);
  const numbFile = [];
  const nameFile = [];

  for (const file of files) {
    const path = join(DATA_DIR, file);

    nameFile.push(path);
    const numArray = await readData(path);
    numbFile.push(numArray);

  }

  for (let i = 0; i < numbFile.length; i += 1) {
    const element = calculateNum(numbFile[i]);

    const fileName = join(OUTPUT_DIR, `${i}.html`)
    await writeFile(fileName, makeHTML(element));
  }
}

main().catch((err) => console.error(err));
