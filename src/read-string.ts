import * as Fs from 'fs'

const readString =
  (path: Fs.PathLike) =>
    Fs.promises.readFile(path, { encoding: 'utf8' })

export default readString
