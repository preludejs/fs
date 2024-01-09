import * as Fs from './index.js'

let dir: string

beforeAll(() => {
  dir = Fs.mkdtempSync(`${Fs.Os.tmpdir()}${Fs.Path.sep}`)
})

afterAll(() => {
  Fs.rmSync(dir, { recursive: true, force: true })
})

test('writeJsonSync', async () => {
  const path = Fs.Path.join(dir, 'write-json.json')
  await Fs.writeJson(path, { foo: 'bar' })
  expect(Fs.readStringSync(path)).toEqual(`{\n  "foo": "bar"\n}\n`)
})
