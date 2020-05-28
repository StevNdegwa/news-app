import path from "path";
import fs from "fs";
import domino from "domino";
const indexFile=path.resolve("./build/index.html");
const template=fs.readFileSync(indexFile).toString();
const winObj=domino.createWindow(template);
global.window=winObj;
global.document=winObj.document;