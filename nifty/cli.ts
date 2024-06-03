import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(question: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(question, (answer: string) => {
      resolve(answer);
    });
  });
}

async function main() {
  const name = await askQuestion('What is your name? ');
  console.log(`Hello, ${name}!`);

  const answer = await askQuestion('Do you like TypeScript? (yes/no) ');
  if (answer.toLowerCase() === 'yes') {
    console.log('Great to hear that!');
  } else {
    console.log('That\'s okay too!');
  }

  rl.close();
}

main();
