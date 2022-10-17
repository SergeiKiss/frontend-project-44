import greeting from '../bin/brain-games.js';

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

export const outro = (countOfCorrectAnswers, name) => {
  if (countOfCorrectAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};
