import readlineSync from 'readline-sync';
import {
  intro,
  outro,
  randomNum,
  evalGCD,
} from '../src/index.js';

export default () => {
  const task = 'Find the greatest common divisor of given numbers.';
  const name = intro(task);
  let countOfCorrectAnswers = 0;
  for (let i = 0; i < 3; i += 1) {
    const randomNum1 = randomNum(10);
    const randomNum2 = randomNum(10);
    // const expression = `${randomNum1} ${randomNum2}`;
    const answer = evalGCD(randomNum1, randomNum2);
    // const answer = 1;
    console.log(`Question: ${randomNum1} ${randomNum2}`);
    let userAnswer = readlineSync.question('Your answer: ');
    // console.log(`Your answer: ${userAnswer}`);
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
