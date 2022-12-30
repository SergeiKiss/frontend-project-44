import readlineSync from 'readline-sync';
import { randomNum, intro, outro } from '../index.js';

export default () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';
  const name = intro(task);
  let countOfCorrectAnswers = 0;
  for (let i = 0; i < 3; i += 1) {
    const expression = randomNum(100);
    console.log(`Question: ${expression}`);
    const answer = readlineSync.question('Your answer: ');
    if (expression % 2 === 0 && answer === 'yes') {
      console.log('Correct!');
      countOfCorrectAnswers += 1;
    } else if (expression % 2 !== 0 && answer === 'no') {
      console.log('Correct!');
      countOfCorrectAnswers += 1;
    } else if (expression % 2 === 0 && answer === 'no') {
      console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
      break;
    } else if (expression % 2 !== 0 && answer === 'yes') {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      break;
    } else {
      console.log('Only "yes" and "no" answers are allowed.');
      break;
    }
  }
  outro(countOfCorrectAnswers, name);
};
