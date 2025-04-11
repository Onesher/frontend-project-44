import readlineSync from 'readline-sync';

const brainGameProgression = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('What number is missing in the progression?');

  for (let i = 1; i <= 3; i += 1) {
    const progression = Math.floor(Math.random() * 10 + 1);
    const randomNumber1 = Math.floor(Math.random() * 20 + 1);
    const arrayProgression = [randomNumber1];
    for (let b = 0; b <= 7; b += 1) {
      let newnumber = arrayProgression[b];
      newnumber += progression;
      arrayProgression.push(newnumber);
    }

    const voidNumber = Math.floor(Math.random() * 8);
    const trueAnswer = arrayProgression[voidNumber];
    arrayProgression[voidNumber] = '..';
    const trueAnswerString = trueAnswer.toString();
    const stringArayProgression = arrayProgression.join(' ');
    console.log(`Question: ${stringArayProgression}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === trueAnswerString) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.\nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default brainGameProgression;
