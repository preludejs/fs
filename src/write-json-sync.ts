import type * as Fs from 'fs'
import writeStringSync from './write-string-sync.js'

const writeJsonSync =
  (
    path: Fs.PathLike,
    value: unknown,
    replacer: Parameters<typeof JSON.stringify>[1] = null,
    space: Parameters<typeof JSON.stringify>[2] = 2
  ) =>
    writeStringSync(path, JSON.stringify(value, replacer, space))

export default writeJsonSync
