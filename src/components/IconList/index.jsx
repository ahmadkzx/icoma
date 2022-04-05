import IconCard from '../IconCard'
import IconModal from '../IconModal'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../contexts/app'

export default function IconList() {
  const [app] = useContext(AppContext)
  const [isSearching, setIsSearching] = useState(false)
  const [icons, setIcons] = useState({
    all: app.icons,
    searched: []
  })

  useEffect(() => {
    setIsSearching(app.searchQuery.trim().length > 0)
    setIcons({
      all: app.icons,
      searched: icons.all.filter(icon => icon.name.toLowerCase().search(app.searchQuery.toLowerCase()) > -1)
    })
    
  }, [app.searchQuery])

  return (
    <div className="grid md:grid-cols-10 lg:grid-cols-12 xl:grid-cols-16 2xl:grid-cols-18 gap-2 pb-2">
      {!isSearching
        ? icons.all.map(icon => <IconCard icon={icon} key={icon.id} />)
        : icons.searched.map(icon => <IconCard icon={icon} key={icon.id} />)
      }
      <IconModal />
    </div>
  )
}