import { runEngine, randomNum } from '../index.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const generatePrimeRound = () => {
  const expression = randomNum(100);
  const answer = isPrime(expression) ? 'yes' : 'no';
  return [expression, answer];
};

export default () => runEngine(task, generatePrimeRound, 'str');
