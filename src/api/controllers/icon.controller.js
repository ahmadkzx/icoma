import path from 'path'
import fs from 'fs/promises'
import { v4 as uuid } from 'uuid'
import readConfig from '../utils/read-config'

export async function addIcon(req, res) {
  try {
    const config = await readConfig()
    const configPath = path.join(__dirname, 'config.json')

    config.icons.push({
      id: uuid(),
      name: req.body.name,
      svg: req.body.svg,
      regexps: []
    })

    await fs.writeFile(configPath, JSON.stringify(config), { encoding: 'utf-8' })

    res.sendStatus(200)
  } catch (err) {
    console.error('[SERVER ERROR]: ', err)
    res.sendStatus(500)
  }
}

export async function deleteIcon(req, res) {
  try {
    const config = await readConfig()
    const configPath = path.join(__dirname, 'config.json')

    config.icons = config.icons.filter((icon) => icon.id !== req.query.id)

    await fs.writeFile(configPath, JSON.stringify(config), { encoding: 'utf-8' })

    res.sendStatus(200)
  } catch (err) {
    console.error('[SERVER ERROR]: ', err)
    res.sendStatus(500)
  }
}

export async function updateIcon(req, res) {
  try {
    const config = await readConfig()
    const configPath = path.join(__dirname, 'config.json')

    const targetIconIndex = config.icons.findIndex((icon) => icon.id == req.body.id)

    if (targetIconIndex == -1) return res.sendStatus(404)

    config.icons[targetIconIndex].name = req.body.name
    config.icons[targetIconIndex].regexps = req.body.regexps

    await fs.writeFile(configPath, JSON.stringify(config), { encoding: 'utf-8' })

    res.sendStatus(200)
  } catch (err) {
    console.error('[SERVER ERROR]: ', err)
    res.sendStatus(500)
  }
}
