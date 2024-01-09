import * as Fs from './index.js'

test('missing', async () => {
  expect(Fs.missingSync('foo')).toBe(true)
  expect(Fs.missingSync('package.json')).toBe(false)
})
