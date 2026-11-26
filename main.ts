import { mkdirSync, writeFileSync } from "node:fs";

const partA = "You have 3 unread messages from your father since March. ";
const partB = "I put them back on top every morning.";
const line = partA + partB;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
