import {
  intro,
  outro,
  randomNum,
  gameWithAnswerNum,
  gcd,
} from '../index.js';

export default () => {
  const task = 'Find the greatest common divisor of given numbers.';
  const name = intro(task);
  let countOfCorrectAnswers = 0;
  for (let i = 0; i < 3; i += 1) {
    const randomNum1 = randomNum(100);
    const randomNum2 = randomNum(100);
    const expression = `${randomNum1} ${randomNum2}`;
    const answer = gcd(randomNum1, randomNum2);
    if (gameWithAnswerNum(expression, answer)) {
      countOfCorrectAnswers += 1;
    } else {
      break;
    }
  }
  outro(countOfCorrectAnswers, name);
};
