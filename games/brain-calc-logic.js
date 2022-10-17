import readlineSync from 'readline-sync';
import {
  intro,
  randomNum,
  randomOperator,
  outro,
} from '../src/index.js';

export default () => {
  const task = 'What is the result of the expression?';
  const name = intro(task);
  let countOfCorrectAnswers = 0;
  for (let i = 0; i < 3; i += 1) {
    const randomNum1 = randomNum();
    const randomNum2 = randomNum();
    const randomOperatorStr = randomOperator();
    const expression = `${randomNum1} ${randomOperatorStr} ${randomNum2}`;
    let answer;
    switch (randomOperatorStr) {
      case '+':
        answer = randomNum1 + randomNum2;
        break;
      case '-':
        answer = randomNum1 - randomNum2;
        break;
      default:
        answer = randomNum1 * randomNum2;
        break;
    }
    console.log(`Question: ${expression}`);
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
