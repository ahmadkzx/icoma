import useModal from '../../hooks/modal'
import ReactHtmlParser from 'react-html-parser'
import { AppContext } from '../../contexts/app'
import { useContext, useState, useEffect } from 'react'

export default function IconCard({ icon }) {
  const [showModal] = useModal('icon-modal')
  const [app, dispatch] = useContext(AppContext)
  const [isSearching, setIsSearching] = useState(false)

  const iconSvg = (app.isFillWhite) ? icon.svg.replace(/fill=".*"/g, 'fill="white"') : icon.svg

  useEffect(() => {
    setIsSearching(app.searchQuery.trim().length > 0)    
  }, [app.searchQuery])

  return (
    <div
      className="relative overflow-hidden flex items-center justify-center min-h-[4.5rem] cursor-pointer p-5 max-w-sm bg-white rounded-lg border shadow-md bg-gray-800 border-gray-700 hover:bg-gray-700"
      onClick={() => dispatch({ type: 'OPEN_ICON_MODAL', payload: icon })}
    >
      <svg width="24" height="24" viewBox="0 0 24 24">
        {ReactHtmlParser(iconSvg)}
      </svg>
      <span className="w-full text-white absolute bottom-0 text-center text-xs bg-gray-700 transition-opacity" style={!isSearching ? { opacity: 0 } : {}}>{icon.name}</span>
    </div>
  )
}