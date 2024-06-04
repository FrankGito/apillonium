import { CollectionType, SubstrateChain, LogLevel, Nft } from "@apillon/sdk";

const nft = new Nft({
  key: "a51d1f95-c56a-49c4-ac54-08abf3567ab1",
  secret: "rfFfWu6wWlpt",
  logLevel: LogLevel.VERBOSE,
});

let createSubstrate = async (
  name: string,
  symbol: string,
  baseUri: string,
  description: string,
) =>
  await nft.createSubstrate({
    chain: SubstrateChain.ASTAR,
    collectionType: CollectionType.GENERIC,
    name,
    symbol,
    baseUri,
    description,
    baseExtension: "json",
    royaltiesFees: 5,
    drop: false,
  });

export { createSubstrate };
