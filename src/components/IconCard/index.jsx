import { useContext } from 'react'
import useModal from '../../hooks/modal'
import ReactHtmlParser from 'react-html-parser'
import { AppContext } from '../../contexts/app'

export default function IconCard({ icon }) {
  const [showModal] = useModal('icon-modal')
  const [app, dispatch] = useContext(AppContext)

  const iconSvg = (app.isFillWhite) ? icon.svg.replace(/fill=".*"/g, 'fill="white"') : icon.svg

  return (
    <div
      className="flex items-center justify-center min-h-[4.5rem] cursor-pointer p-5 max-w-sm bg-white rounded-lg border shadow-md bg-gray-800 border-gray-700 hover:bg-gray-700"
      onClick={() => dispatch({ type: 'OPEN_ICON_MODAL', payload: icon })}
    >
      <svg width="24" height="24" viewBox="0 0 24 24">
        {ReactHtmlParser(iconSvg)}
      </svg>
    </div>
  )
}