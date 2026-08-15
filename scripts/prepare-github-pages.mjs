import { cp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const source = join(root, "dist", "client");
const target = join(root, "gh-pages");

await rm(target, { recursive: true, force: true });
await mkdir(target, { recursive: true });
await cp(source, target, { recursive: true });

async function rewriteAssets(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = join(directory, entry.name);
    if (entry.isDirectory()) {
      await rewriteAssets(file);
      continue;
    }
    if (!/\.(html|css|js|json)$/.test(entry.name)) continue;
    const content = await readFile(file, "utf8");
    const updated = content.replace(/([=:("'])\/(_next|favicon\.svg)/g, "$1./$2");
    if (updated !== content) await writeFile(file, updated);
  }
}

await rewriteAssets(target);
console.log(`Prepared GitHub Pages files in ${target}`);
