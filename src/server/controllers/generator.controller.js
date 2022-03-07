import path from 'path'
import fs from 'fs/promises'
import readConfig from '../utils/read-config'
import { vueTemplate } from '../utils/templates'

export async function generate(req, res) {
  try {
    const config = await readConfig()
    const dist = path.join(__dirname, '../../../mock/icon')

    await Promise.all(config.icons.map(async icon => {
      const componentContent = vueTemplate(config, icon)
      const componentFiletype = (config.target == 'vue') ? 'vue' : 'jsx'
      const componentPath = path.join(dist, `/${icon.name}.${componentFiletype}`)
      await fs.writeFile(componentPath, componentContent, 'utf-8')
    }))

    res.sendStatus(200)

  } catch(err) {
    console.error('[SERVER ERROR]: ', err)
    res.sendStatus(500)
  }
}