
import { Storage, LogLevel } from "@apillon/sdk";
import * as fs from "fs";

const storage = new Storage({
  key: "a51d1f95-c56a-49c4-ac54-08abf3567ab1",
  secret: "rfFfWu6wWlpt",
  logLevel: LogLevel.VERBOSE,
});

// Bucket has to be created on the UI 
const bucket = storage.bucket("c3952273-74b4-4222-8fd6-70fea842ede3");

const jsonBuffer = fs.readFileSync("./1.json");
const result = await bucket.uploadFiles([
  {
    fileName: "1.json",
    contentType: "application/json",
    content: jsonBuffer,
  },
]);
console.log(result);
