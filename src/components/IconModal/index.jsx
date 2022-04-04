import axios from 'axios'
import Spinner from '../Spinner'
import useModal from '../../hooks/modal'
import useRegexps from '../../hooks/regexps'
import { AppContext } from '../../contexts/app'
import ReactHtmlParser from 'react-html-parser'
import { useState, useContext, useEffect } from 'react'

export default function IconModal() {
  const [name, setName] = useState('')
  const [iconSvg, setIconSvg] = useState('')
  const [regexps, setRegexps] = useState([])
  const [app, dispatch] = useContext(AppContext)
  const [isSaving, setIsSaving] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const [showModal, hideModal] = useModal('icon-modal')
  const [addRegexp, deleteRegexp, updateRegexp] = useRegexps()

  useEffect(() => {
    if (app.iconModal?.id) {
      setName(app.iconModal.name)
      setRegexps(app.iconModal.regexps || [])
      setIconSvg((app.isFillWhite) ? app.iconModal.svg.replace(/fill=".*"/g, 'fill="white"') : app.iconModal.svg)
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

      const endpoint = process.env.API_ORIGIN + '/api/icon'
      const body = { name, regexps, id: app.iconModal?.id }

      await axios.patch(endpoint, body)
      
      setIsSaving(false)
      dispatch({ type: 'REFRESH' })
      dispatch({ type: 'OPEN_ICON_MODAL' })
      hideModal()

    } catch(err) {
      console.error(err)
      dispatch({
        type: 'SHOW_TOAST',
        payload: {
          type: 'ERROR',
          text: 'Failed !',
          stamp: new Date().getTime()
        }
      })
      
      setIsSaving(false)
    }
  }

  async function deleteIcon() {
    try {
      if (isDeleting) return
      setIsDeleting(true)

      const endpoint = process.env.API_ORIGIN + '/api/icon?id=' + app.iconModal?.id

      await axios.delete(endpoint)
      
      setIsDeleting(false)
      dispatch({ type: 'REFRESH' })
      dispatch({ type: 'OPEN_ICON_MODAL' })
      hideModal()

    } catch(err) {
      console.error(err)
      dispatch({
        type: 'SHOW_TOAST',
        payload: {
          type: 'ERROR',
          text: 'Failed !',
          stamp: new Date().getTime()
        }
      })
      
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
              onClick={close}
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
                {ReactHtmlParser(iconSvg)}
              </svg>
            </div>

            <div className="mt-3">
              <span className="block mb-2 text-sm font-medium text-gray-900 text-gray-300">Default Regex Replace Patterns</span>

              {app.regexps.map(regexp => <div className="grid grid-cols-2 gap-2 mb-2" key={'regexp-' + regexp.id}>
                <input
                  type="text"
                  disabled
                  placeholder="Expression"
                  value={regexp.expression}
                  className="cursor-not-allowed border text-sm rounded-lg block p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                />

                <input
                  type="text"
                  disabled
                  value={regexp.value}
                  placeholder="Value"
                  className="cursor-not-allowed border text-sm rounded-lg block p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                />
              </div>)}
            </div>

            <div className="mt-3">
            <span className="block mb-2 text-sm font-medium text-gray-900 text-gray-300">Regex Replace Patterns</span>

            {regexps.map(regexp => <div className="grid grid-cols-9 gap-2 mb-2" key={'regexp-' + regexp.id}>
              <input
                type="text"
                placeholder="Expression"
                value={regexp.expression}
                className="col-span-4 border text-sm rounded-lg block p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                onChange={e => setRegexps(updateRegexp(regexps, { id: regexp.id, expression: e.target.value, value: regexp.value }))}
              />

              <input
                type="text"
                value={regexp.value}
                placeholder="Value"
                className="col-span-4 border text-sm rounded-lg block p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                onChange={e => setRegexps(updateRegexp(regexps, { id: regexp.id, expression: regexp.expression, value: e.target.value }))}
              />

              <button
                type="button"
                className="col-span-1 flex items-center justify-center text-white focus:ring-40 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-red-600 hover:bg-red-700 focus:ring-red-900"
                onClick={() => setRegexps(deleteRegexp(regexps, regexp.id))}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
              </button>
            </div>)}

            <button
              type="button"
              className="text-white focus:ring-4 font-medium rounded-lg text-sm px-3 py-2.5 text-center mr-2 mb-2 bg-gray-800 hover:bg-gray-600 focus:ring-gray-800 border-gray-700"
              onClick={() => setRegexps(addRegexp(regexps))}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
            </button>
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
                {isSaving && <div className="mr-2"><Spinner size="sm" color="white-blue" /></div>}
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
                {isDeleting && <div className="mr-2"><Spinner size="sm" color="white-blue" /></div>}
                <span>{isDeleting ? 'Loading...' : 'Delete'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}