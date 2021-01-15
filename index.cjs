const rgb = require('barecolor');

module.exports = async function (headline, fn) {
  const suite = [];
  const only = [];
  let beforeAll = async () => {};
  let afterAll = async () => {};
  let beforeEach = async () => {};
  let afterEach = async () => {};
  const it = (name, fn) => suite.push({ name: name, fn: fn });
  it.only = (name, fn) => only.push({ name: name, fn: fn });
  it.skip = () => {};

  fn({
    it: it,
    beforeAll: (fn) => {
      beforeAll = fn;
    },
    afterAll: (fn) => {
      afterAll = fn;
    },
    beforeEach: (fn) => {
      beforeEach = fn;
    },
    afterEach: (fn) => {
      afterEach = fn;
    },
  });

  const tests = only.length > 0 ? only : suite;
  rgb.cyanln(headline + ' ');

  await beforeAll();
  for (const test of tests) {
    try {
      await beforeEach();
      await test.fn();
      rgb.green(`✓`);
      rgb.gray(` ${test.name}\n`);
    } catch (e) {
      rgb.red(`\n✗ ${test.name} \n\n`);
      throw e;
    } finally {
      await afterEach();
    }
  }
  await afterAll();
};
