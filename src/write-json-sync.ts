import type * as Fs from 'fs'
import writeStringSync from './write-string-sync.js'

type Replacer =
  Parameters<typeof JSON.stringify>[1]

type Space =
  Parameters<typeof JSON.stringify>[2]

const writeJsonSync =
  (
    path: Fs.PathLike,
    value: unknown,
    replacer: Replacer = null,
    space: Space = 2,
    nl = true
  ) =>
    writeStringSync(path, JSON.stringify(value, replacer, space) + (nl ? '\n' : ''))

export default writeJsonSync
