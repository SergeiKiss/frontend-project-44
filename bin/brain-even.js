#!/usr/bin/env node
import readlineSync from 'readline-sync';

const brainEven = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let countOfCorrectAnswers = 0;
  for (let i = 0; i < 3; i += 1) {
    const randomNum = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.prompt();
    if (randomNum % 2 === 0 && answer === 'yes') {
      console.log('Correct!');
      countOfCorrectAnswers += 1;
    } else if (randomNum % 2 !== 0 && answer === 'no') {
      console.log('Correct!');
      countOfCorrectAnswers += 1;
    } else if (randomNum % 2 === 0 && answer === 'no') {
      console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
      break;
    } else if (randomNum % 2 !== 0 && answer === 'yes') {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      break;
    } else {
      console.log('Only "yes" and "no" answers are allowed.');
      break;
    }
  }

  if (countOfCorrectAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

brainEven('N');
