import { readFileSync, writeFileSync } from "fs";

const fileOptions = { encoding: "utf8", flag: "r" };
const fileText = readFileSync(".gitignore", fileOptions);

console.log("remove dist/ in .gitignore");
writeFileSync("./.gitignore", fileText.replace("\ndist/", ""));
