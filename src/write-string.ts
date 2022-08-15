import * as Fs from 'fs'

const writeString =
  (path: Fs.PathLike, value: string) =>
    Fs.promises.writeFile(path, value, { encoding: 'utf8' })

export default writeString
