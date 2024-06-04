import { LogLevel, Nft } from "@apillon/sdk";

const nft = new Nft({
  key: "a51d1f95-c56a-49c4-ac54-08abf3567ab1",
  secret: "rfFfWu6wWlpt",
  logLevel: LogLevel.VERBOSE,
});

const searchCollection = await nft.listCollections();
// console.log(searchCollection)

export { searchCollection };
