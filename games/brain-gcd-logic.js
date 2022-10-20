import readlineSync from 'readline-sync';
import { gcd } from 'mathjs';
import {
  intro,
  outro,
  randomNum,
} from '../src/index.js';

export default () => {
  const task = 'Find the greatest common divisor of given numbers.';
  const name = intro(task);
  let countOfCorrectAnswers = 0;
  for (let i = 0; i < 3; i += 1) {
    const randomNum1 = randomNum(100);
    const randomNum2 = randomNum(100);
    // const expression = `${randomNum1} ${randomNum2}`;
    const answer = gcd(randomNum1, randomNum2);
    console.log(`Question: ${randomNum1} ${randomNum2}`);
    let userAnswer = readlineSync.prompt();
    console.log(`Your answer: ${userAnswer}`);
    userAnswer = Number(userAnswer);
    if (userAnswer === answer) {
      console.log('Correct!');
      countOfCorrectAnswers += 1;
    } else if (Number.isNaN(userAnswer)) {
      console.log('Only numbers are allowed.');
      break;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      break;
    }
  }
  outro(countOfCorrectAnswers, name);
};
