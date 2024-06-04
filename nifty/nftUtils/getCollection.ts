import { LogLevel, Nft } from "@apillon/sdk";

const nft = new Nft({
  key: "a51d1f95-c56a-49c4-ac54-08abf3567ab1",
  secret: "rfFfWu6wWlpt",
  logLevel: LogLevel.VERBOSE,
});

const defaultAddress = "d3eabd73-6cf9-4b9d-b0e6-374c69797d8e";
let getCollection = async (address = defaultAddress) =>
  await nft.collection(address).get();

export { getCollection };
