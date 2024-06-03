import { getCollection } from "./getCollection";

const nftCollection = await getCollection()

const defaultAddress = "d3eabd73-6cf9-4b9d-b0e6-374c69797d8e";
const defaultQuantity = 1;
const defaultIdsToMint = [1];

const mint = async ({
  address = defaultAddress,
  quantity = defaultQuantity,
  idsToMint = defaultIdsToMint,
}) =>
  await nftCollection.mint({
    receivingAddress: address,
    quantity: quantity,
    idsToMint: idsToMint,
  });

export { mint };
