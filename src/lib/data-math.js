// eslint-disable-next-line import/no-extraneous-dependencies
import { variance, max, mean, median, min, std, sum, range } from 'mathjs';

export function calculateNum(input) {

  if (input === '' || input === undefined || input === null || input.length <= 0) {
    return 0;
  }

  const statNum = {};
  statNum.var = variance(input);
  statNum.max = max(input);
  statNum.mean = mean(input);
  statNum.median = median(input);
  statNum.min = min(input);
  statNum.std = std(input);
  statNum.sum = sum(input);
  statNum.range = range(input[0], input[input.length - 1]);
  statNum.numbers = input;

  return statNum;
}
