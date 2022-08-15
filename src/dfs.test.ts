import * as Fs from './index.js'
import * as G from '@prelude/async-generator'

test('simple', async () => {
  expect(G.pipe(
    Fs.dfs('src/test'),
    G.map(_ => _.linkpath ? `${_.path} -> ${_.linkpath}` : _.path),
    G.array
  )).resolves.toEqual([
    'src/test/dfs',
    'src/test/dfs/a',
    'src/test/dfs/a/.gitkeep',
    'src/test/dfs/b -> src/test/dfs/a',
    'src/test/dfs/c',
    'src/test/dfs/c/.gitkeep',
    'src/test/dfs/c/parent -> src/test/dfs',
  ])
})
