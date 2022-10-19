import {
  intro,
  outro,
  randomNum,
  gameWithAnswerNum,
} from '../src/index.js';

export default () => {
  const task = 'What number is missing in the progression?';
  const name = intro(task);
  let countOfCorrectAnswers = 0;
  for (let i = 0; i < 3; i += 1) {
    const step = randomNum(100);
    const firstNum = randomNum(100);
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
    if (gameWithAnswerNum(expression, answer)) {
      countOfCorrectAnswers += 1;
    } else {
      break;
    }
  }
  outro(countOfCorrectAnswers, name);
};
