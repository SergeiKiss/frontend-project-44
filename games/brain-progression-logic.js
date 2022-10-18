import readlineSync from 'readline-sync';
import { intro, outro, randomNum } from '../src/index.js';

export default () => {
  const task = 'What number is missing in the progression?';
  const name = intro(task);
  let countOfCorrectAnswers = 0;
  for (let i = 0; i < 3; i += 1) {
    const step = randomNum();
    const firstNum = randomNum();
    const randomPlaceInProgression = Math.floor(Math.random() * 10);
    let expression = '';
    let numOfProgression = firstNum;
    let answer;
    if (randomPlaceInProgression === 0) {
      expression += '.. ';
      answer = firstNum;
    } else {
      expression += `${firstNum} `;
    }
    for (let j = 1; j < 10; j += 1) {
      if (j === randomPlaceInProgression) {
        numOfProgression += step;
        expression += '.. ';
        answer = numOfProgression;
      } else {
        numOfProgression += step;
        expression += `${numOfProgression} `;
      }
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
