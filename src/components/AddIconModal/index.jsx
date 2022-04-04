import axios from 'axios'
import Spinner from '../Spinner'
import useModal from '../../hooks/modal'
import { useState, useContext } from 'react'
import { AppContext } from '../../contexts/app'

export default function AddIconModal() {
  const [app, dispatch] = useContext(AppContext)
  const [iconName, setIconName] = useState('')
  const [iconSvg, setIconSvg] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [showModal, hideModal] = useModal('add-icon-modal')

  async function addIcon() {
    try {
      if (isLoading) return
      setIsLoading(true)
      
      __validateFields()
      const svgText = await __extractSvg()

      const endpoint = process.env.API_ORIGIN + '/api/icon'
      const body = {
        name: iconName,
        svg: svgText,
      }

      await axios.put(endpoint, body)
      
      dispatch({ type: 'REFRESH' })
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

    } finally {
      setIsLoading(false)
    }
  }

  function __validateFields() {
    try {
      if (iconName.trim().length == 0) throw new Error('Icon name is necessary')
      if (/\s/g.test(iconName)) throw new Error('Icon name should not contain white space')

      if (!iconSvg[0]) throw new Error('Icon svg file is necessary')
      if (iconSvg[0].type !== 'image/svg+xml') throw new Error('Icon file type should be svg')

    } catch(err) {
      dispatch({
        type: 'SHOW_TOAST',
        payload: {
          type: 'ERROR',
          text: err.message,
          stamp: new Date().getTime()
        }
      })

      throw err
    }
  }

  async function __extractSvg() {
    let svg = await iconSvg[0].text()
    // remove <svg></svg> and convert /> to </path>
    svg = svg.replace(/<svg\b((?:[^>"']|"[^"]*"|'[^']*')*)>/g, '<g>').replace(/<\/svg>/g, '</g>').replace(/\/>/g, '></path>')

    return svg
  }

  return (
    <div
      id="add-icon-modal"
      aria-hidden="true"
      className="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0"
    >
      <div className="relative px-4 w-full max-w-2xl h-full md:h-auto">
        <div className="relative rounded-lg shadow bg-gray-700">
          <div className="flex justify-between items-start p-5 rounded-t border-b border-gray-500">
            <h3 className="text-xl font-semibold lg:text-2xl text-white">
              Add new icon
            </h3>
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
            <div>
              <label htmlFor="icon-name" className="block mb-2 text-sm font-medium text-gray-900 text-gray-300">Name</label>
              <input
                type="text"
                id="icon-name"
                placeholder="AwesomeIcon"
                className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                onChange={e => setIconName(e.target.value)}
              />
            </div>

            <div className="mt-3">
              <label htmlFor="icon-file" className="block mb-2 text-sm font-medium text-gray-300">SVG</label>
              <input
                id="icon-file"
                type="file"
                className="block w-full text-sm rounded-lg border cursor-pointer text-gray-400 focus:outline-none bg-gray-700 border-gray-600 placeholder-gray-400"
                onChange={e => setIconSvg(e.target.files)}
              />
            </div>
          </div>
          
          <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-600">
            <button
              type="button"
              className="flex items-center justify-center text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
              onClick={addIcon}
            >
              {isLoading && <div className="mr-2"><Spinner size="sm" color="white-blue" /></div>}
              <span>{isLoading ? 'Loading...' : 'Add'}</span>
            </button>
            <button
              data-modal-toggle="add-icon-modal"
              type="button"
              disabled={isLoading}
              className="border focus:ring-4 focus:ring-gray-300 rounded-lg text-sm font-medium px-5 py-2.5 focus:z-10 bg-gray-700 text-gray-300 border-gray-500 hover:text-white hover:bg-gray-600"
              onClick={hideModal}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}