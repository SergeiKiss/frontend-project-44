import { runEngine, randomNum } from '../index.js';

const task = 'Find the greatest common divisor of given numbers.';

const gcd = (number1, number2) => {
  if (!number2) {
    return number1;
  }
  return gcd(number2, number1 % number2);
};

const generateGCDRound = () => {
  const randomNum1 = randomNum(100);
  const randomNum2 = randomNum(100);
  const expression = `${randomNum1} ${randomNum2}`;
  const answer = gcd(randomNum1, randomNum2);
  return [expression, answer];
};

export default () => runEngine(task, generateGCDRound, 'num');
