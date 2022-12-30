import readlineSync from 'readline-sync';
import {
  intro,
  outro,
  randomNum,
} from '../index.js';

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

export default () => {
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const name = intro(task);
  let countOfCorrectAnswers = 0;
  for (let i = 0; i < 3; i += 1) {
    const expression = randomNum(100);
    console.log(`Question: ${expression}`);
    const answer = readlineSync.question('Your answer: ');
    if (isPrime(expression) && answer === 'yes') {
      console.log('Correct!');
      countOfCorrectAnswers += 1;
    } else if (!isPrime(expression) && answer === 'no') {
      console.log('Correct!');
      countOfCorrectAnswers += 1;
    } else if (isPrime(expression) && answer === 'no') {
      console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
      break;
    } else if (!isPrime(expression) && answer === 'yes') {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      break;
    } else {
      console.log('Only "yes" and "no" answers are allowed.');
      break;
    }
  }
  outro(countOfCorrectAnswers, name);
};
