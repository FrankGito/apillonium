import {
  LogLevel,
  Nft,
  IMintNftData
} from '@apillon/sdk';


const nft = new Nft({
  key: 'a51d1f95-c56a-49c4-ac54-08abf3567ab1',
  secret: 'rfFfWu6wWlpt',
  logLevel: LogLevel.VERBOSE,
});

let substrateCollection = nft.collection("d3eabd73-6cf9-4b9d-b0e6-374c69797d8e")
let nftCollection = await substrateCollection.get()

const params: IMintNftData = {
  receivingAddress: "",
  quantity: 1,
  idsToMint: [1, 5, 8]
}
const res = await nftCollection.mint(params)

