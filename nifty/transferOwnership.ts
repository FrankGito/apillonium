import {
  LogLevel,
  Nft,
  CollectionStatus,
} from '@apillon/sdk';

const nft = new Nft({
  key: 'a51d1f95-c56a-49c4-ac54-08abf3567ab1',
  secret: 'rfFfWu6wWlpt',
  logLevel: LogLevel.VERBOSE,
});

let substrateCollection = await nft.collection("d3eabd73-6cf9-4b9d-b0e6-374c69797d8e").get()

if (substrateCollection.collectionStatus == CollectionStatus.DEPLOYED) {
  console.log('Collection deployed: ', substrateCollection.transactionHash);
} else {
  console.log("Collection not deployed")
}
substrateCollection = await nft.collection('uuid').get();

await substrateCollection.transferOwnership(
  '0x5BA8B0c24bA5307b67E619ad500a635204F73bF1'
);
