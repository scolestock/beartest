#!/usr/bin/env node

import glob from 'tiny-glob';
import fs from 'fs';
import path from 'path';

async function main() {
  let config = {
    files: '**/*.test.*',
    afterAll: () => {},
  };
  const configFilePath = path.resolve('./beartest.config.js');
  if (fs.existsSync(configFilePath)) {
    const configFile = await import(configFilePath);
    config = {
      ...config,
      ...configFile.default,
    };
  }
  const suppliedGlob = process.argv[2];
  const files = await glob(suppliedGlob || config.files, { absolute: true });
  for (const file of files) {
    const { default: defaultTest } = await import(file);
    await defaultTest;
  }

  await config.afterAll();
}

main();
