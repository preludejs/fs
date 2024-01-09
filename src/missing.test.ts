import * as Fs from './index.js'

test('missing', async () => {
  expect(Fs.missing('foo')).resolves.toBe(true)
  expect(Fs.missing('package.json')).resolves.toBe(false)
})
