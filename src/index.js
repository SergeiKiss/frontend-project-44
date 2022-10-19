import readlineSync from 'readline-sync';
import greeting from './cli.js';

export const randomNum = () => Math.floor(Math.random() * 100);

export const randomOperator = () => {
  const arrOfOperators = ['+', '-', '*'];
  return arrOfOperators[Math.floor(Math.random() * 3)];
};

export const intro = (task) => {
  const name = greeting();
  console.log(task);
  return name;
};

export const gameWithAnswerNum = (expression, answer) => {
  console.log(`Question: ${expression}`);
  let userAnswer = readlineSync.prompt();
  console.log(`Your answer: ${userAnswer}`);
  userAnswer = Number(userAnswer);
  if (userAnswer === answer) {
    console.log('Correct!');
    return true;
  }
  if (Number.isNaN(userAnswer)) {
    console.log('Only numbers are allowed.');
    return false;
  }

  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
  return false;
};

export const outro = (countOfCorrectAnswers, name) => {
  if (countOfCorrectAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};
