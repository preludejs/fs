import * as Fs from 'fs'

export const readJsons =
  async <T = unknown>(path: Fs.PathLike): Promise<T[]> => {
    const buffer = await Fs.promises.readFile(path)
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

export default readJsons
