import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
const path = require("path");
const fs = require("fs");

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toPusherKey(key: string) {
  return key.replace(/:/g, "__");
}

export function chatHrefConstructor(id1: string, id2: string) {
  const sortedIds = [id1, id2].sort();
  return `${sortedIds[0]}--${sortedIds[1]}`;
}

export function saveAddressToEnv(address: any,key: string) {
  if(!key || !address) {
    return;
  }
  const envPath = path.resolve(__dirname, "../../.env");
  let updated = false;

  // Read the current .env file content
  let envContent = fs.readFileSync(envPath, "utf8");

  // Split the content into lines
  let lines = envContent.split("\n");

  // Map over the lines and update the key if it exists
  lines = lines.map((line: any) => {
    if (line.startsWith(key + "=")) {
      updated = true; // Flag that we've updated the line
      return `${key}=${address}`; // Return the updated line
    }
    return line; // Return the line unchanged
  });

  // If the key was not found and updated, add it to the end
  if (!updated) {
    lines.push(`${key}=${address}`);
  }

  // Join the lines back into a single string and write back to the file
  fs.writeFileSync(envPath, lines.join("\n"), "utf8");
  console.log(`${key} saved to .env file: ${address}`);
}
