import { Storage, LogLevel, FileStatus } from "@apillon/sdk";
import * as fs from "fs";

const storage = new Storage({
  key: "a51d1f95-c56a-49c4-ac54-08abf3567ab1",
  secret: "rfFfWu6wWlpt",
  logLevel: LogLevel.VERBOSE,
});

// list buckets
await storage.listBuckets({ limit: 5 });

// create and instance of a bucket directly through uuid
const bucket = storage.bucket("uuid");

const jsonBuffer = fs.readFileSync("./1.json");
const result = await bucket.uploadFiles([
  {
    fileName: "1.json",
    contentType: "application/json",
    content: jsonBuffer,
  },
]);
console.log(result);

/**
// list objects (files, folders) in a bucket
await bucket.listObjects({
  directoryUuid: 'eaff2672-3012-46fb-9278-5efacc6cb616',
  markedForDeletion: false,
  limit: 5,
});

// list all files in a bucket no matter if they are in a folder or not
await bucket.listFiles({ fileStatus: FileStatus.UPLOADED });

// generate an IPFS link for a CID
// const cid = 'bafybeigjhyc2tpvqfqsuvf3byo4e4a4v6spi6jk4qqvvtlpca6rsaf2cqi';
// const link = await storage.generateIpfsLink(cid);

// gets a specific file in a bucket directly through uuid
const file = await bucket.file('2195521d-15cc-4f6e-abf2-13866f9c6e03').get();

// deletes a file via uuid
await bucket.file('2195521d-15cc-4f6e-abf2-13866f9c6e03').delete();
// deletes a directory via uuid
await bucket.directory('eddc52cf-92d2-436e-b6de-42d7cad621c3').delete();
*/
