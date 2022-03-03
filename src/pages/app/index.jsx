import axios from 'axios'
import Spinner from '../../components/Spinner'
import { AppContext } from '../../contexts/app'
import IconList from '../../components/IconList'
import DefaultLayout from '../../layouts/default'
import { useContext, useEffect, useState } from 'react'


export default function AppPage() {
  const [app] = useContext(AppContext)
  const [icons, setIcons] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => getIcons(), [app?.iconsStamp])

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
            ? <div className="flex items-center justify-center min-h-[90vh]"><Spinner size="8" border="gray-600" fill="blue-600" /></div>
            : <IconList icons={icons} />
        }
      </div>
    </DefaultLayout>
  )
}