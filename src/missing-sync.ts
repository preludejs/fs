import * as Fs from 'fs'

export const missingSync =
  (path: Fs.PathLike) =>
    !Fs.existsSync(path)

export default missingSync
