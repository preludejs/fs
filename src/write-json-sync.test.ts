import * as Fs from './index.js'

let dir: string

beforeAll(() => {
  dir = Fs.mkdtempSync(`${Fs.Os.tmpdir()}${Fs.Path.sep}`)
})

afterAll(() => {
  Fs.rmSync(dir, { recursive: true, force: true })
})

test('writeJsonSync', () => {
  const path = Fs.Path.join(dir, 'write-json-sync.json')
  Fs.writeJsonSync(path, { foo: 'bar' })
  expect(Fs.readStringSync(path)).toEqual(`{\n  "foo": "bar"\n}\n`)
})
