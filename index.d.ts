type testFn = (name: string, fn: () => void | Promise<void>) => void

export declare function describe(headline: string, fn: (args: {
  test: testFn & { only: testFn, skip: testFn }
  it: testFn & { only: testFn, skip: testFn }
  beforeAll: (fn: () => void | Promise<void>) => void
  afterAll: (fn: () => void | Promise<void>) => void
  beforeEach: (fn: () => void | Promise<void>) => void
  afterEach: (fn: () => void | Promise<void>) => void
}) => void): Promise<boolean>