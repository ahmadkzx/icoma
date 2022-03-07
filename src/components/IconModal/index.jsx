import axios from 'axios'
import Spinner from '../Spinner'
import useModal from '../../hooks/modal'
import { AppContext } from '../../contexts/app'
import ReactHtmlParser from 'react-html-parser'
import { useState, useContext, useEffect } from 'react'

export default function IconModal() {
  const [name, setName] = useState('')
  const [app, dispatch] = useContext(AppContext)
  const [isSaving, setIsSaving] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const [showModal, hideModal] = useModal('icon-modal')
  const iconPath = app.iconModal?.svg.replace(/<svg\b((?:[^>"']|"[^"]*"|'[^']*')*)>/g, '<g>').replace(/<\/svg>/g, '</g>').replace(/\/>/g, '></path>')

  useEffect(() => {
    if (app.iconModal?.id) {
      setName(app.iconModal.name)
      showModal()
    }
  }, [app.iconModal])

  function close() {
    dispatch({ type: 'OPEN_ICON_MODAL' })
    hideModal()
  }

  async function save() {
    try {
      if (isSaving) return
      setIsSaving(true)

      const endpoint = process.env.REACT_APP_SERVER_ORIGIN + '/api/icon'
      const body = { name, id: app.iconModal?.id }

      axios.patch(endpoint, body)
      
      await new Promise(r => setTimeout(r, 1000))
      setIsSaving(false)
      dispatch({ type: 'REFRESH' })
      dispatch({ type: 'OPEN_ICON_MODAL' })
      hideModal()

    } catch(err) {
      console.error(err)
      setIsSaving(false)
    }
  }

  async function deleteIcon() {
    try {
      if (isDeleting) return
      setIsDeleting(true)

      const endpoint = process.env.REACT_APP_SERVER_ORIGIN + '/api/icon?id=' + app.iconModal?.id

      axios.delete(endpoint)
      
      await new Promise(r => setTimeout(r, 1000))
      setIsDeleting(false)
      dispatch({ type: 'REFRESH' })
      dispatch({ type: 'OPEN_ICON_MODAL' })
      hideModal()

    } catch(err) {
      console.error(err)
      setIsDeleting(false)
    }
  }

  return (
    <div
      id="icon-modal"
      aria-hidden="true"
      className="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0"
    >
      <div className="relative px-4 w-full max-w-2xl h-full md:h-auto">
        <div className="relative rounded-lg shadow bg-gray-700">
          <div className="flex justify-between items-center p-5 rounded-t border-b border-gray-500">
            <div>
              <input
                type="text"
                id="icon-name"
                value={name}
                placeholder="AwesomeIcon"
                className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                onChange={e => setName(e.target.value)}
              />
            </div>

            <button
              type="button"
              className="text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-600 hover:text-white"
              onClick={hideModal}
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div className="p-6">
            <div className="py-3 flex items-center justify-center icon-preview-container bg-gray-800 rounded">
              <svg className="h-32 w-32" viewBox="0 0 24 24">
                {ReactHtmlParser(iconPath)}
              </svg>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-6 space-x-2 rounded-b border-t border-gray-600">
            <div className="flex items-center">
              <button
                type="button"
                disabled={isSaving || isDeleting}
                className="mr-2 flex items-center justify-center text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                onClick={save}
              >
                {isSaving && <div className="mr-2"><Spinner size="4" border="white" fill="blue-700" /></div>}
                <span>{isSaving ? 'Loading...' : 'Save'}</span>
              </button>
              <button
                data-modal-toggle="icon-modal"
                type="button"
                disabled={isSaving || isDeleting}
                className="border focus:ring-4 focus:ring-gray-300 rounded-lg text-sm font-medium px-5 py-2.5 focus:z-10 bg-gray-700 text-gray-300 border-gray-500 hover:text-white hover:bg-gray-600"
                onClick={close}
              >
                Cancel
              </button>
            </div>
            <div>
              <button
                type="button"
                disabled={isSaving || isDeleting}
                className="flex items-center justify-center text-white focus:ring-40 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-red-600 hover:bg-red-700 focus:ring-red-900"
                onClick={deleteIcon}
              >
                {isDeleting && <div className="mr-2"><Spinner size="4" border="white" fill="blue-700" /></div>}
                <span>{isDeleting ? 'Loading...' : 'Delete'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}