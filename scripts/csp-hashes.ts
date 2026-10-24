/**
 * Fill production CSP hashes for a local `next build`, and check the files
 * Vercel actually serves.
 *
 * On Vercel, `scripts/csp-adapter.mjs` runs inside onBuildComplete, before the
 * adapter writes `.next/output/config.json`. This step still runs afterwards:
 * `next start` reads `routes-manifest.json`, and a placeholder left in either
 * file would block every inline script. It fails if that happens.
 */
import path from "node:path";
import { assertDeploymentOutput, publishInlineScriptHashes, retargetUnconditionalToolbarChunks } from "../src/lib/csp-publish";

const root = process.cwd();
const nextDir = path.join(root, ".next");

function fail(message: string): never {
  console.error(`\nCSP build failed: ${message}\n`);
  process.exit(1);
}

async function main() {
  let published;
  try {
    const retargeted = await retargetUnconditionalToolbarChunks(nextDir);
    if (retargeted.length) {
      console.log(`CSP: retargeted ${retargeted.length} preview toolbar chunk(s)`);
    }
    published = await publishInlineScriptHashes({ distDir: nextDir });
    const checked = await assertDeploymentOutput({
      projectRoot: root,
      distDir: nextDir,
      requireDeploymentOutput: process.env.VERCEL === "1",
    });
    if (checked.configs.length) {
      console.log(`CSP: checked hashed policy in ${checked.configs.map((file) => path.relative(root, file)).join(", ")}`);
    }
    const outputRoots = [path.join(root, ".vercel", "output"), "/vercel/output"];
    for (const dir of outputRoots) {
      const again = await retargetUnconditionalToolbarChunks(dir);
      if (again.length) console.log(`CSP: retargeted ${again.length} preview toolbar chunk(s) in deployment output`);
    }
  } catch (err) {
    fail(err instanceof Error ? err.message : String(err));
  }

  const headerBytes = Buffer.byteLength(published.policy);
  console.log(
    `CSP: ${published.hashList.length} inline-script hashes across ${published.files.length} HTML files, header ${headerBytes} bytes, patched ${published.patchedFiles.length} file(s).`,
  );
  if (headerBytes > 7500) {
    fail(`Content-Security-Policy is ${headerBytes} bytes. Split hashes per route before it exceeds proxy header limits.`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
