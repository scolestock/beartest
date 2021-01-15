<img src="https://beartest-js.s3.amazonaws.com/beartest-logo.png" width="400">

_Beartest_ is an extremely simple JavaScript test runner inspired by Baretest and Mocha. It has a tiny footprint while maintaining a familiar API.

### Install

```
npm install --save-dev beartest-js
```

```
yarn add beartest-js -D
```

### Why Beartest?

Mocha, Jest, and similar testing frameworks are richly featured, broadly compatible, and highly customizable. Beartest is none of those things.
**If you want features look somewhere else.** Beartest is meant to be understandable above all else. Inspired by baretest, it seeks to deliver an
API similar to Mocha's with minimal code. **Note:** Beartest is only compatible with Node 14.

### Usage

_Beartest_ implements the basic test organization provided by Mocha. The `beforeAll`, `beforeEach`, `afterEach`, and `afterAll` ordering functions are made available as well as `it.skip` and `it.only`. Additionally, a very basic test runner is included. This test runner accepts a glob pattern as a command line argument. The test runner can be invoked with `yarn beartest sum.test.js`.

### Example Test

```javascript
import describe from 'beartest-js';
import assert from 'assert';

export default describe('Sum', ({ it }) => {
  it('should add correctly', async () => {
    assert.strictEqual(1 + 2, 3);
  });
});
```

## License

Copyright 2020 OpenJS Foundation and contributors. Licensed under [MIT](./LICENSE).
