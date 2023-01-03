import { runEngine, generateRoundForGamesWithAnswerStr as gr } from '../index.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const generateEvenRound = () => gr(isEven);

export default () => runEngine(task, generateEvenRound, 'str');
