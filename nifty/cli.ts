import * as readline from "readline";
import { mkdir } from "node:fs/promises";
import { writeFile, readFile } from "node:fs/promises";
import { greeting } from "./cliUtils/greeting.ts";
import { Storage, LogLevel, Nft, SubstrateChain, CollectionType } from "@apillon/sdk";

// Initialise Readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Initialise Storage
const storage = new Storage({
  key: "a51d1f95-c56a-49c4-ac54-08abf3567ab1",
  secret: "rfFfWu6wWlpt",
  logLevel: LogLevel.VERBOSE,
});

// Initialise NFT 
const nft = new Nft({
  key: "a51d1f95-c56a-49c4-ac54-08abf3567ab1",
  secret: "rfFfWu6wWlpt",
  logLevel: LogLevel.VERBOSE,
});

// Declare Question & Answer Loop
function askQuestion(question: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(question, (answer: string) => {
      resolve(answer);
    });
  });
}

/* Command Line Interface */
async function main() {
  /* Greet the User */
  greeting();
  const optionChoice = await askQuestion(`
Type A or B
A) Create Metadata + Create Collection + Mint NFT
B) Quit
`);
  /*********************** OPTION A *******************/
  /***Create Metadata + Create Collection + Mint NFT***/
  /****************************************************/

  if (optionChoice.toUpperCase() === "A") {
    /* Cratft Metadata */
    console.log("Lets make a Folder for the metadata");
    const answer_metadata_folder = await askQuestion(
      "What is name of the folder? ",
    );
    await mkdir(answer_metadata_folder, { recursive: true });

    console.log("Lets craft our metadata");
    const answer_metadata_name = await askQuestion("What is the name? ");
    const answer_metadata_description = await askQuestion(
      "What is the description? ",
    );
    const answer_metadata_glb = await askQuestion("What is the glb link? ");
    const content = `{"name": "${answer_metadata_name}","description": "${answer_metadata_description}","glb": "${answer_metadata_glb}"}`;
    await writeFile(`./${answer_metadata_folder}/1.json`, content);

    console.log("Lets upload our metadata");
    const bucket = storage.bucket("c3952273-74b4-4222-8fd6-70fea842ede3");
    const jsonBuffer = await readFile(`./${answer_metadata_folder}/1.json`);
    const res = await bucket.uploadFiles(
      [
        {
          fileName: "1.json",
          contentType: "application/json",
          content: jsonBuffer,
        },
      ],
      { wrapWithDirectory: true, directoryPath: `${answer_metadata_folder}` },
    );
    console.log(res);
    console.log("You are glorious, lets continue.");

    /* Cratft Collecton */
    console.log("Lets craft our Collection");
    const answer_collection_name = await askQuestion(
      "What is the name of our Collection?",
    );
    const answer_collection_description = await askQuestion(
      "What is the description of our Collection?",
    );
    const answer_collection_symbol = await askQuestion(
      "What is the Symbol of our Collectio?",
    );
    const answer_collection_base_uri = await askQuestion(
      "What is the baseUri of our Collection?",
    );

    console.log("Create Collection");
    const nft_collection = await nft.createSubstrate({
      chain: SubstrateChain.ASTAR,
      collectionType: CollectionType.GENERIC,
      name: answer_collection_name,
      symbol: answer_collection_symbol,
      baseUri: answer_collection_base_uri,
      description: answer_collection_description,
      baseExtension: "json",
      royaltiesFees: 5,
      drop: false,
    });
    console.log("Finished Creation");
    console.log("You are glorious, lets continue.");

    /* Mint on Collection */
    const answer_mint_address = await askQuestion(
      "Which address should be the owner?",
    );
    console.log("You will mint Id 1")
    await nft_collection.mint({
      receivingAddress: answer_mint_address,
      idsToMint: [1],
    });



  } else if (optionChoice.toUpperCase() === "B") {
    /*********************** OPTION B *******************/
    /****************************************************/
    /****************************************************/
    console.log("Thank you, come back when more option available.")
  } else {
    console.log("Invalid choice.")
  }

  rl.close();
}

main();
