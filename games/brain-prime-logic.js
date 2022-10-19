import readlineSync from 'readline-sync';
import { isPrime } from 'mathjs';
import { intro, outro, randomNum } from '../src/index.js';

export default () => {
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const name = intro(task);
  let countOfCorrectAnswers = 0;
  for (let i = 0; i < 3; i += 1) {
    const expression = randomNum(100);
    console.log(`Question: ${expression}`);
    const answer = readlineSync.prompt();
    console.log(`Your answer: ${answer}`);
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
