import type * as Fs from 'fs'
import writeString from './write-string.js'

const writeJsons =
  (path: Fs.PathLike, values: unknown[]) =>
    writeString(path, values.map(_ => JSON.stringify(_) + '\n'))

export default writeJsons
