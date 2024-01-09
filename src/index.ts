import exists from './exists.js'
import readJson from './read-json.js'
import readJsons from './read-jsons.js'
import readJsonsSync from './read-jsons-sync.js'
import readJsonSync from './read-json-sync.js'
import readString from './read-string.js'
import readStringSync from './read-string-sync.js'
import writeJson from './write-json.js'
import writeJsons from './write-jsons.js'
import writeJsonsSync from './write-jsons-sync.js'
import writeJsonSync from './write-json-sync.js'
import writeString from './write-string.js'
import writeStringSync from './write-string-sync.js'

export * from 'fs'
export * from './missing.js'
export * from './missing-sync.js'
export * from './dfs.js'

import * as Os from 'os'
import * as Path from 'path'

export {
  exists,
  readJson,
  readJsons,
  readJsonsSync,
  readJsonSync,
  readString,
  readStringSync,
  writeJson,
  writeJsons,
  writeJsonsSync,
  writeJsonSync,
  writeString,
  writeStringSync,
  Os,
  Path
}
