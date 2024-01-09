import type * as Fs from 'fs'
import writeString from './write-string.js'

type Replacer =
  Parameters<typeof JSON.stringify>[1]

type Space =
  Parameters<typeof JSON.stringify>[2]

const writeJson =
  (
    path: Fs.PathLike,
    value: unknown,
    replacer: Replacer = null,
    space: Space = 2,
    nl = true
  ) =>
    writeString(path, JSON.stringify(value, replacer, space) + (nl ? '\n' : ''))

export default writeJson
