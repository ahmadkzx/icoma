import fs from 'fs/promises'

export default async function exist(path, createIfNotExist = true, content = '') {
  try {
    await fs.access(path)

  } catch(err) {
    if (createIfNotExist) await fs.writeFile(path, content, 'utf-8')
  }
}