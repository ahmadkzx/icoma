import path from 'path'
import fs from 'fs/promises'

export async function addIcon(req, res) {
  try {
    console.log(req.body)
    // const dist = path.join(__dirname, '../../../mock/icons')
    // const filePath = path.join(dist, '/', req.body.name)
    // const fileContent = JSON.stringify({
    //   name: req.body.name,
    //   svg: req.body.svg
    // })

    // await fs.writeFile(filePath, fileContent, 'utf-8')

    res.status(204)

  } catch(err) {
    console.error('[SERVER ERROR]: ', err)
    res.status(500)
  }
}

export async function getIcons(req, res) {
  try {
    const src = path.join(__dirname, '../../../mock/icons.json')
    const icons = await fs.readFile(src, { encoding: 'utf-8' })

    res.status(200).json({ data: JSON.parse(icons) })

  } catch(err) {
    console.error('[SERVER ERROR]: ', err)
    res.status(500)
  }
}

export function deleteIcon() {}