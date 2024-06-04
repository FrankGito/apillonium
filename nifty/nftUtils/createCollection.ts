import { CollectionType, SubstrateChain, LogLevel, Nft } from "@apillon/sdk";

const nft = new Nft({
  key: "a51d1f95-c56a-49c4-ac54-08abf3567ab1",
  secret: "rfFfWu6wWlpt",
  logLevel: LogLevel.VERBOSE,
});

let createSubstrate = await nft.createSubstrate({
  chain: SubstrateChain.ASTAR,
  collectionType: CollectionType.GENERIC,
  name: "Frankos",
  symbol: "FO",
  baseUri: "https://moonbeamnfts.com/collections/spaceexplorers/",
  description: "Frankos are a uprising NFT Collection",
  baseExtension: "json",
  royaltiesFees: 5,
  drop: false,
  maxSupply: 100,
});

export { createSubstrate };
