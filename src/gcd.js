import readlineSync from 'readline-sync';

const brainGameGcd = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 1; i <= 3; i += 1) {
    const randomNumber1 = Math.floor(Math.random() * 100 + 1);
    const randomNumber2 = Math.floor(Math.random() * 100 + 1);
    let smallerRandomNum;
    if (randomNumber1 < randomNumber2) {
      smallerRandomNum = randomNumber1;
    } else if (randomNumber2 < randomNumber1) {
      smallerRandomNum = randomNumber2;
    }
    let nod = smallerRandomNum;

    while (nod >= 0) {
      if (randomNumber1 % nod === 0 && randomNumber2 % nod === 0) {
        break;
      }
      nod -= 1;
    }
    const stringNod = nod.toString();

    console.log(`Question: ${randomNumber1} ${randomNumber2}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === stringNod) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${nod}'.\nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default brainGameGcd;
