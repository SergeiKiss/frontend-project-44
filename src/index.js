import readlineSync from 'readline-sync';
import greeting from './cli.js';

export const randomNum = (range) => Math.floor(Math.random() * range);

const intro = (task) => {
  const name = greeting();
  console.log(task);
  return name;
};

const gameWithAnswerNum = (expression, answer) => {
  console.log(`Question: ${expression}`);
  let userAnswer = readlineSync.question('Your answer: ');
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

const gameWithAnswerStr = (expression, answer) => {
  console.log(`Question: ${expression}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const possibleAnswers = ['yes', 'no'];
  if (userAnswer === answer) {
    console.log('Correct!');
    return true;
  }
  if (!possibleAnswers.includes(userAnswer)) {
    console.log('Only "yes" and "no" answers are allowed.');
    return false;
  }

  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
  return false;
};

const outro = (countOfCorrectAnswers, name) => {
  if (countOfCorrectAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

export const runEngine = (rules, generateRound, typeOfAnswer) => {
  const name = intro(rules);
  let countOfCorrectAnswers = 0;
  for (let i = 0; i < 3; i += 1) {
    const [question, answer] = generateRound();
    if (typeOfAnswer === 'num') {
      if (gameWithAnswerNum(question, answer)) {
        countOfCorrectAnswers += 1;
      } else {
        break;
      }
    }
    if (typeOfAnswer === 'str') {
      if (gameWithAnswerStr(question, answer)) {
        countOfCorrectAnswers += 1;
      } else {
        break;
      }
    }
  }
  outro(countOfCorrectAnswers, name);
};
