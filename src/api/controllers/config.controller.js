import path from 'path'
import fs from 'fs/promises'
import readConfig from '../utils/read-config'

export async function getConfig(req, res) {
  try {
    const config = await readConfig()

    res.status(200).json({ data: config })
  } catch (err) {
    console.error('[SERVER ERROR]: ', err)
    res.sendStatus(500)
  }
}

export async function setConfig(req, res) {
  try {
    const config = await readConfig()
    const configPath = path.join(__dirname, process.env.CONFIG_PATH)

    if (req.body.name) config.name = req.body.name
    if (req.body.regexps) config.regexps = req.body.regexps
    if (req.body.fileType) config.fileType = req.body.fileType
    if (req.body.template) config.template = req.body.template
    if (req.body.isFillWhite) config.isFillWhite = req.body.isFillWhite
    if (req.body.destination) config.destination = req.body.destination

    fs.writeFile(configPath, JSON.stringify(config), 'utf-8')
    res.sendStatus(200)
  } catch (err) {
    console.error('[SERVER ERROR]: ', err)
    res.sendStatus(500)
  }
}
