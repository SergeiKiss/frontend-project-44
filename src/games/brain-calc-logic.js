import { runEngine, randomNum } from '../index.js';

const task = 'What is the result of the expression?';

const randomOperator = () => {
  const arrOfOperators = ['+', '-', '*'];
  return arrOfOperators[Math.floor(Math.random() * 3)];
};

const generateCalcRound = () => {
  const randomNum1 = randomNum(100);
  const randomNum2 = randomNum(100);
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
  return [expression, answer];
};

export default () => runEngine(task, generateCalcRound, 'num');
