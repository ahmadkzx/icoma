import path from 'path'
import fs from 'fs/promises'

export function addIcon() {}

export async function getIcons(req, res) {
  try {
    const src = path.join(__dirname, '../../../mock/icons')
    const filesName = await fs.readdir(src)

    const files = await Promise.all(filesName.map(async name => {
      const filePath = path.join(src, name)
      const file = await fs.readFile(filePath, { encoding: 'utf-8' })
      return JSON.parse(file)
    }))

    res.status(200).json({ data: files })

  } catch(err) {
    console.error('[SERVER ERROR]: ', err)
    res.status(500)
  }
}

export function deleteIcon() {}