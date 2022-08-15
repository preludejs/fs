import * as Fs from 'fs'

const writeStringSync =
  (path: Fs.PathLike, value: string) =>
    Fs.writeFileSync(path, value, { encoding: 'utf8' })

export default writeStringSync
