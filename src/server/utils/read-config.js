import path from 'path'
import exist from './exist'
import fs from 'fs/promises'
import defaultConfig from './default-config'

export default async function readConfig() {
  try {
    const configPath = path.join(__dirname, '../../../mock/config.json')

    await exist(configPath, /*createIfNotExist*/ true, /*content*/ JSON.stringify(defaultConfig))

    const configJson = await fs.readFile(configPath, { encoding: 'utf-8' })
    const config = JSON.parse(configJson)

    return config

  } catch(err) {
    throw err
  }
}