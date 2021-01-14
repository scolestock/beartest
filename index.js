import rgb from 'barecolor';

export async function describe(headline, fn) {
  const suite = [];
  const only = [];
  let beforeAll = () => {};
  function setBeforeAll(fn) {
    beforeAll = fn;
  }
  let afterAll = () => {};
  function setAfterAll(fn) {
    afterAll = fn;
  }
  let beforeEach = () => {};
  function setBeforeEach(fn) {
    beforeEach = fn;
  }
  let afterEach = () => {};
  function setAfterEach(fn) {
    afterEach = fn;
  }

  function test(name, fn) {
    suite.push({ name: name, fn: fn });
  }
  test.only = function (name, fn) {
    only.push({ name: name, fn: fn });
  };
  test.skip = function () {};

  await fn({
    test: test,
    it: test,
    beforeAll: setBeforeAll,
    afterAll: setAfterAll,
    beforeEach: setBeforeEach,
    afterEach: setAfterEach,
  });

  const tests = only.length > 0 ? only : suite;

  rgb.cyanln(headline + ' ');

  await beforeAll();
  for (const test of tests) {
    try {
      await beforeEach();
      await test.fn();
      rgb.green(`✓`);
      rgb.grayln(` ${test.name}`);
    } catch (e) {
      rgb.red(`\n\n! ${test.name} \n\n`);
      throw e;
    } finally {
      await afterEach();
    }
  }
  await afterAll();
  console.log();
}
