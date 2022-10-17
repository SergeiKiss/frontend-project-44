#!/usr/bin/env node
import nameQuestion from '../src/cli.js';

export default () => {
  console.log('Welcome to the Brain Games!');
  return nameQuestion();
};
