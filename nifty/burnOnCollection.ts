import { getCollection } from "./getCollection";

/*--------------------*/
/*--HAS TO REVOKABLE--*/
/*--------------------*/
const substrateCollection = await getCollection()
const burn = async (tokenId: string) => await substrateCollection.burn(tokenId);

export { burn };
