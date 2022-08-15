import * as Fs from 'fs'

const exists =
  (path: Fs.PathLike) =>
    Fs.promises.stat(path)
      .then(() => true)
      .catch(() => false)

export default exists
