import readStringSync from './read-string-sync.js'
import type * as Fs from 'fs'

const readJsonSync =
  <T = unknown>(path: Fs.PathLike): T =>
    JSON.parse(readStringSync(path))

export default readJsonSync
