import path from 'path'
import fs from 'fs/promises'
import { v4 as uuid } from 'uuid'
import exist from '../utils/exist'
import defaultConfig from '../utils/default-config'

export async function getConfig(req, res) {
  try {
    const configPath = path.join(__dirname, '../../../mock/config.json')

    await exist(configPath, /*createIfNotExist*/ true, /*content*/ JSON.stringify(defaultConfig))

    const configJson = await fs.readFile(configPath, { encoding: 'utf-8' })
    const config = JSON.parse(configJson)

    res.status(200).json({ data: config })

  } catch(err) {
    console.error('[SERVER ERROR]: ', err)
    res.sendStatus(500)
  }
}

export async function addIcon(req, res) {
  try {
    const configPath = path.join(__dirname, '../../../mock/config.json')

    await exist(configPath, /*createIfNotExist*/ true, /*content*/ JSON.stringify(defaultConfig))

    const configJson = await fs.readFile(configPath, { encoding: 'utf-8' })
    const config = JSON.parse(configJson)

    config.icons.push({
      id: uuid(),
      name: req.body.name,
      svg: req.body.svg
    })

    await fs.writeFile(configPath, JSON.stringify(config), { encoding: 'utf-8' })

    res.sendStatus(204)

  } catch(err) {
    console.error('[SERVER ERROR]: ', err)
    res.status(500)
  }
}

export function deleteIcon() {}