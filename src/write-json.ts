import type * as Fs from 'fs'
import writeString from './write-string.js'

const writeJson =
  (
    path: Fs.PathLike,
    value: unknown,
    replacer: Parameters<typeof JSON.stringify>[1] = null,
    space: Parameters<typeof JSON.stringify>[2] = 2
  ) =>
    writeString(path, JSON.stringify(value, replacer, space))

export default writeJson
