import readlineSync from 'readline-sync';

const brainGamePrime = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 1; i <= 3; i += 1) {
    const randomInArray = Math.floor(Math.random() * 11);
    const primeNumbers = [3, 5, 7, 11, 13, 4, 6, 8, 9, 10, 12];
    const primeNum = primeNumbers[randomInArray];
    let trueAnswer = 'yes';
    for (let b = 2; b < primeNum; b += 1) {
      if (primeNum % b === 0) {
        trueAnswer = 'no';
        break;
      }
    }
    console.log(`Question: ${primeNum}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === trueAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.\nLet's try again, ${userName}!`);
    }
  }

  return console.log(`Congratulations, ${userName}!`);
};

export default brainGamePrime;
