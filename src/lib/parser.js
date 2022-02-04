export function parse(input) {
  const numPut = input.trim();

  if (Number.isNaN(parseInt(input, 10))) {
    return 0;
  }
  // eslint-disable-next-line consistent-return
  return parseInt(numPut, 10);
}
