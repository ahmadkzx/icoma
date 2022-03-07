export async function generate() {
  try {
    const config = await readConfig()
    const dist = path.join(__dirname, '../../../mock/icon')

    

    res.status(200).json({ data: config })

  } catch(err) {
    console.error('[SERVER ERROR]: ', err)
    res.sendStatus(500)
  }
}