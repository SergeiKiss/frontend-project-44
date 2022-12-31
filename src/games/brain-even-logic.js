import { runEngine, randomNum } from '../index.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const generateEvenRound = () => {
  const expression = randomNum(100);
  const answer = isEven(expression) ? 'yes' : 'no';
  return [expression, answer];
};

export default () => runEngine(task, generateEvenRound, 'str');
