import readString from './read-string.js'
import type * as Fs from 'fs'

export const readJsons =
  <T = unknown>(path: Fs.PathLike): Promise<T[]> =>
    readString(path)
      .then(_ => _.split('\n'))
      .then(_s => _s.filter(_ => _.length > 0))
      .then(_s => _s.map(_ => JSON.parse(_)))

export default readJsons
