/**
 * parses the input into a number
 * @param {*} input
 * @returns integer.
 */
export function parse(input) {
  const numPut = input.trim();

  if (Number.isNaN(parseInt(input, 10))) {
    return 0;
  }
  // eslint-disable-next-line consistent-return
  return parseInt(numPut, 10);
}
