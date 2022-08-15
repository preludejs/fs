import * as Fs from 'fs'
import * as Path from 'path'
import * as Trie from '@prelude/radix-trie'

export type Entry = {
  path: string,
  dirent: Fs.Dirent,
  parent: string,
  link?: string,
  linkpath?: string
}

const aux =
  async function* (
    parent: string,
    recurse: (entry: Entry) => boolean,
    trie: Trie.t
  ): AsyncGenerator<Entry> {
    for (const dirent of await Fs.promises.readdir(parent, { withFileTypes: true })) {
      const path = Path.join(parent, dirent.name)
      if (Trie.has(trie, path)) {
        continue
      }
      Trie.insert(trie, path)
      const link = dirent.isSymbolicLink() ?
        await Fs.promises.readlink(path) :
        undefined
      const linkpath =
        link ?
          Path.isAbsolute(link) ?
            link :
            Path.join(parent, link) :
        undefined
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

const dfs =
  (
    parent = '.',
    recurse: (entry: Entry) => boolean = () => true
  ) =>
    aux(parent, recurse, Trie.empty())

export default dfs
