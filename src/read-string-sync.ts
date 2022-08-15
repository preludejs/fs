import * as Fs from 'fs'

const readStringSync =
  (path: Fs.PathLike) =>
    Fs.readFileSync(path, { encoding: 'utf8' })

export default readStringSync
