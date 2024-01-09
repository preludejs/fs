import * as Fs from 'fs'
import * as Path from 'path'
import * as Trie from '@prelude/radix-trie'

export type DfsEntry = {
  path: string,
  dirent: Fs.Dirent,
  parent: string,
  link?: string,
  linkpath?: string
}

const maybeLink =
  async (dirent: Fs.Dirent, parent: string) =>
    dirent.isSymbolicLink() ?
      await Fs.promises.readlink(Path.join(parent, dirent.name)) :
      undefined

const maybeAbsolute =
  (parent: string, path?: string) => {
    if (!path) {
      return undefined
    }
    if (Path.isAbsolute(path)) {
      return path
    }
    return Path.join(parent, path)
  }

const aux =
  async function* (
    parent: string,
    recurse: (entry: DfsEntry) => boolean,
    trie: Trie.t
  ): AsyncGenerator<DfsEntry> {
    for (const dirent of await Fs.promises.readdir(parent, { withFileTypes: true })) {
      const path = Path.join(parent, dirent.name)
      if (Trie.has(trie, path)) {
        continue
      }
      Trie.insert(trie, path)
      const link = await maybeLink(dirent, parent)
      const linkpath = maybeAbsolute(parent, link)
      const entry = { path, dirent, parent, link, linkpath }
      yield entry
      if ((dirent.isDirectory() || dirent.isSymbolicLink()) && recurse(entry)) {
        if (linkpath) {
          yield* aux(linkpath, recurse, trie)
        } else {
          yield *aux(path, recurse, trie)
        }
      }
    }
  }

export const dfs =
  (
    parent = '.',
    recurse: (entry: DfsEntry) => boolean = () => true
  ) =>
    aux(parent, recurse, Trie.empty())

export default dfs
