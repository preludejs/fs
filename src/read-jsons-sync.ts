import readStringSync from './read-string-sync.js'
import type * as Fs from 'fs'

export const readJsonsSync =
  <T = unknown>(path: Fs.PathLike): T[] =>
    readStringSync(path)
      .split('\n')
      .filter(_ => _.length > 0)
      .map(_ => JSON.parse(_))

export default readJsonsSync
