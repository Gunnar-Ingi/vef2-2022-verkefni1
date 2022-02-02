import { join } from 'path';
import { readFile, readdir } from 'fs/promises';
import { parse } from './parser.js';
import { readData } from './read-data.js';
import { makeHTML } from './make-html.js';

const DATA_DIR = './data';

async function main() {
  const files = await readdir(DATA_DIR);
  let numbFile = [];
  for (const file of files) {
    const path = join(DATA_DIR, file);
    const data = await readFile(path);

    const str = parse(data);
    let numArray = await readData(path);
    numbFile.push(numArray);
  }
  console.log('numbFile :>> ', numbFile);
}

main().catch((err) => console.error(err));
