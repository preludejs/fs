import * as Fs from 'fs'

export const readJsonsSync =
  <T = unknown>(path: Fs.PathLike): T[] => {
    const buffer = Fs.readFileSync(path)
    let a = 0
    let b = buffer.indexOf('\n')
    const result: T[] = []
    while (b !== -1) {
      result.push(JSON.parse(buffer.subarray(a, b).toString()))
      a = b + 1
      b = buffer.indexOf('\n', a)
    }
    return result
  }

export default readJsonsSync
