import {
  intro,
  randomNum,
  randomOperator,
  outro,
  gameWithAnswerNum,
} from '../src/index.js';

export default () => {
  const task = 'What is the result of the expression?';
  const name = intro(task);
  let countOfCorrectAnswers = 0;
  for (let i = 0; i < 3; i += 1) {
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
    if (gameWithAnswerNum(expression, answer)) {
      countOfCorrectAnswers += 1;
    } else {
      break;
    }
  }
  outro(countOfCorrectAnswers, name);
};
