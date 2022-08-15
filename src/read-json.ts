import readString from './read-string.js'
import type * as Fs from 'fs'

const readJson =
  <T = unknown>(path: Fs.PathLike): Promise<T> =>
    readString(path)
      .then(JSON.parse)

export default readJson
