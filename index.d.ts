type test = (name: string, fn: () => void | Promise<void>) => void

declare function describe(headline: string, fn: (args: {
  it: test & { only: test, skip: test }
  beforeAll: (fn: () => void | Promise<void>) => void
  afterAll: (fn: () => void | Promise<void>) => void
  beforeEach: (fn: () => void | Promise<void>) => void
  afterEach: (fn: () => void | Promise<void>) => void
}) => void): Promise<boolean>

export = describe