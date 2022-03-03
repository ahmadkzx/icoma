import path from 'path'
import fs from 'fs/promises'
import exist from '../utils/exist'

export async function addIcon(req, res) {
  try {
    const iconsPath = path.join(__dirname, '../../../mock/icons.json')

    await exist(iconsPath, /*createIfNotExist*/ true, /*content*/ '[]')

    const iconsJson = await fs.readFile(iconsPath, { encoding: 'utf-8' })
    const icons = JSON.parse(iconsJson)

    icons.push({
      name: req.body.name,
      svg: req.body.svg
    })

    await fs.writeFile(iconsPath, JSON.stringify(icons), { encoding: 'utf-8' })

    res.sendStatus(204)

  } catch(err) {
    console.error('[SERVER ERROR]: ', err)
    res.status(500)
  }
}

export async function getIcons(req, res) {
  try {
    const iconsPath = path.join(__dirname, '../../../mock/icons.json')

    await exist(iconsPath, /*createIfNotExist*/ true, /*content*/ '[]')

    const iconsJson = await fs.readFile(iconsPath, { encoding: 'utf-8' })
    const icons = JSON.parse(iconsJson)

    res.status(200).json({ data: icons })

  } catch(err) {
    console.error('[SERVER ERROR]: ', err)
    res.sendStatus(500)
  }
}

export function deleteIcon() {}