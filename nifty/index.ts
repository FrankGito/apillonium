import {
  CollectionType,
  SubstrateChain,
  LogLevel,
  Nft,
  CollectionStatus,
} from '@apillon/sdk';

const nft = new Nft({
  key: 'a51d1f95-c56a-49c4-ac54-08abf3567ab1',
  secret: 'rfFfWu6wWlpt',
  logLevel: LogLevel.VERBOSE,
});

console.log("--- INITIALISE SUCESS --- ")
console.log(nft)

let substrateCollection = nft.collection("d3eabd73-6cf9-4b9d-b0e6-374c69797d8e")
await substrateCollection.get()

// let substrateCollection = await nft.createSubstrate({
//   chain: SubstrateChain.ASTAR,
//   collectionType: CollectionType.GENERIC,
//   name: 'SpaceExplorers',
//   symbol: 'SE',
//   baseUri: 'https://moonbeamnfts.com/collections/spaceexplorers/',
//   description: 'A collection of unique space exploration NFTs.',
//   baseExtension: 'json',
//   royaltiesFees: 5,
//   drop: false,
//   maxSupply: 100,
// });
// console.log("--- CREATE NFT SUCESS --- ")
// console.log(substrateCollection)

// check if collection is deployed - available on chain
if (substrateCollection.collectionStatus == CollectionStatus.DEPLOYED) {
  console.log('Collection deployed: ', substrateCollection.transactionHash);
} else {
  console.log("Collection not deployed")
}
/**
// search through collections
const listo = await nft.listCollections();
console.log("--- SEARCH NFT SUCESS --- ")
console.log(listo)

// create and instance of collection directly through uuid
substrateCollection = await nft.collection('uuid').get();
console.log("--- GET NFT UUID SUCESS --- ")
console.log(substrateCollection)

// mint a new nft in the collection
await substrateCollection.mint({
  receivingAddress: '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD',
  quantity: 1,
});

// nest mint a new nft if collection type is NESTABLE
await substrateCollection.nestMint(substrateCollection.uuid, 1, 1);

// burn/destroy a specific NFT by its ID if collection is set as revokable
await substrateCollection.burn('1');

// list confirmed transactions on a collection
await substrateCollection.listTransactions({
  transactionStatus: TransactionStatus.CONFIRMED,
});

// transfer ownership of a collection away from apillon platform to an address
// NOTE that this will disable the ability to mint/burn etc. from the SDK/API since only the owner
// has this ability
await substrateCollection.transferOwnership(
  '0x5BA8B0c24bA5307b67E619ad500a635204F73bF1'
);
*/
