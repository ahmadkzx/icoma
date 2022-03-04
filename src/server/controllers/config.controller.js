import readConfig from '../utils/read-config'

export async function getConfig(req, res) {
  try {
    const config = await readConfig()

    res.status(200).json({ data: config })

  } catch(err) {
    console.error('[SERVER ERROR]: ', err)
    res.sendStatus(500)
  }
}

export async function setConfig(req, res) {
  try {
    const config = await readConfig()

    res.status(200).json({ data: config })

  } catch(err) {
    console.error('[SERVER ERROR]: ', err)
    res.sendStatus(500)
  }
}