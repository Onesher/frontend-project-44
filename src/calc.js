import readlineSync from 'readline-sync';

const brainGameCalc = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('What is the result of the expression?');

  for (let i = 1; i <= 3; i += 1) {
    const randomNumber1 = Math.floor(Math.random() * 100);
    const randomNumber2 = Math.floor(Math.random() * 100);
    const arrayMathOperations = ['+', '-', '*'];
    const randomItemOperations = Math.floor(Math.random() * arrayMathOperations.length);
    const randomOperations = arrayMathOperations[randomItemOperations];
    let trueAnswer;
    switch (randomOperations) {
      case '+':
        trueAnswer = randomNumber1 + randomNumber2;
        break;
      case '-':
        trueAnswer = randomNumber1 - randomNumber2;
        break;
      default:
        trueAnswer = randomNumber1 * randomNumber2;
        break;
    }
    const stringTrueAnswer = trueAnswer.toString();
    console.log(`Question: ${randomNumber1} ${randomOperations} ${randomNumber2}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === stringTrueAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.\nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default brainGameCalc;
