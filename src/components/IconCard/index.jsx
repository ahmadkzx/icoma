import useModal from '../../hooks/modal'
import ReactHtmlParser from 'react-html-parser'

export default function IconCard({ icon }) {
  const [showModal] = useModal('icon-modal')

  return (
    <div
      className="flex items-center justify-center min-h-[4.5rem] cursor-pointer p-5 max-w-sm bg-white rounded-lg border shadow-md bg-gray-800 border-gray-700 hover:bg-gray-700"
      onClick={showModal}
    >
      {ReactHtmlParser(icon.svg)}
    </div>
  )
}