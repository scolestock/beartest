#!/usr/bin/env node

import glob from 'tiny-glob';

async function runTests() {
  try {
    const globStr = process.argv[2] || '**/*.test.*';
    const files = await glob(globStr, { absolute: true });
    for (const file of files) {
      let module = await import(file);
      await module.default;
    }
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

runTests();
