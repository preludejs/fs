import type { PathLike } from 'fs'
import exists from './exists.js'

export const missing =
  (path: PathLike) =>
    exists(path)
      .then(_ => !_)

export default missing
