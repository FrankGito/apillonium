import * as readline from "readline";
import { hello } from "./greeting.ts";
import { getCollection } from "./getCollection.ts";
import { mint } from './mintOnCollection.ts'
import { burn } from "./burnOnCollection.ts";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(question: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(question, (answer: string) => {
      resolve(answer);
    });
  });
}

async function main() {
  hello();

  const answer_a = await askQuestion(
    "Get an already deployed Collection? (yes/no)",
  );
  answer_a.toLowerCase() === "yes"
    ? console.log(await getCollection("d3eabd73-6cf9-4b9d-b0e6-374c69797d8e"))
    : "You said you don't want";

  const answer_b = await askQuestion(
    "Wanna mint something (yes/no)",
  );
  answer_b.toLowerCase() === "yes"
    ? console.log(await mint({ idsToMint: [0] }))
    : "You said you don't want";

  const answer_c = await askQuestion(
    "Wanna burn something (yes/no)",
  );
  answer_c.toLowerCase() === "yes"
    ? console.log(await burn('1'))
    : "You said you don't want";

  rl.close();
}

main();
