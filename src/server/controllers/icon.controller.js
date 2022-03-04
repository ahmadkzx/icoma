import path from 'path'
import fs from 'fs/promises'
import { v4 as uuid } from 'uuid'
import readConfig from '../utils/read-config'

export async function addIcon(req, res) {
  try {
    const config = await readConfig()
    const configPath = path.join(__dirname, '../../../mock/config.json')

    config.icons.push({
      id: uuid(),
      name: req.body.name,
      svg: req.body.svg
    })

    await fs.writeFile(configPath, JSON.stringify(config), { encoding: 'utf-8' })

    res.sendStatus(204)

  } catch(err) {
    console.error('[SERVER ERROR]: ', err)
    res.sendStatus(500)
  }
}

export function deleteIcon() {}