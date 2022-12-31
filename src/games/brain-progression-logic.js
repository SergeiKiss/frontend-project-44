import { runEngine, randomNum } from '../index.js';

const task = 'What number is missing in the progression?';

const generateProgressionRound = () => {
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
  return [expression, answer];
};

export default () => runEngine(task, generateProgressionRound, 'num');
