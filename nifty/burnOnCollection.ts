import { getCollection } from "./getCollection";

const substrateCollection = await getCollection()
const burn = async (tokenId: string) => await substrateCollection.burn(tokenId);

export { burn };
