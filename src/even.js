import readlineSync from 'readline-sync';

const brainGameEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 1; i <= 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100);
    const trueAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${randomNumber}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer === trueAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.\nLet's try again, ${userName}`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default brainGameEven;
