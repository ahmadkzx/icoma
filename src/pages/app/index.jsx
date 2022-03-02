import axios from 'axios'
import { useEffect, useState } from 'react'
import Spinner from '../../components/Spinner'
import IconCard from '../../components/IconCard'
import DefaultLayout from '../../layouts/default'

export default function AppPage() {
  const [icons, setIcons] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => getIcons(), [])

  async function getIcons() {
    try {
      const endpoint = process.env.REACT_APP_SERVER_ORIGIN + '/icons'
      const { data: result } = await axios.get(endpoint)
      setIcons(result.data)
      setIsLoading(false)

    } catch(err) {
      console.error(err)
    }
  }

  return (
    <DefaultLayout>
      <div className="container mx-auto mt-3">
        {
          isLoading
            ? <div className="flex items-center justify-center min-h-[90vh]"><Spinner /></div>
            : <div className="grid grid-cols-18 gap-2">
                {icons.map((icon, index) => <IconCard icon={icon} key={'icon-' + index} />)}
              </div>
        }
      </div>
    </DefaultLayout>
  )
}