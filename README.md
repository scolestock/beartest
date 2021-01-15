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

### Example Test

```javascript
import describe from 'beartest-js';
import assert from 'assert';

export default describe('Sum', ({ it }) => {
  it('add correctly', async () => {
    assert.strictEqual(1 + 2, 3);
  });
});
```

## License

Copyright 2020 OpenJS Foundation and contributors. Licensed under [MIT](./LICENSE).
