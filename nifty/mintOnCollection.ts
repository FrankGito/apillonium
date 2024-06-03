import { getCollection } from "./getCollection";

const nftCollection = await getCollection()

const defaultAddress = "Z1pTFZC9tGSmTN66gxEKzY5R5cpwo9eaf2yE8Vt3HaLJuzD";
const defaultQuantity = 1;
const defaultIdsToMint = [2];

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
