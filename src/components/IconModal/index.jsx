import './index.css'
import axios from 'axios'
import Spinner from '../Spinner'
import useModal from '../../hooks/modal'
import { useState, useContext, useEffect } from 'react'
import { AppContext } from '../../contexts/app'
import ReactHtmlParser from 'react-html-parser'

export default function IconModal() {
  const [app, dispatch] = useContext(AppContext)
  const [isLoading, setIsLoading] = useState(false)
  const [showModal, hideModal] = useModal('icon-modal')

  
  const icon = {
    "id": "9f343469-8e3d-4f1d-8c2a-b6843fd10e5d",
    "name": "Chats",
    "svg": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M13.2 7.6L14.6 9L13.2 10.4C12.8 10.8 12.8 11.4 13.2 11.8C13.4 12 13.6 12.1 13.9 12.1C14.2 12.1 14.4 12 14.6 11.8L16 10.4L17.4 11.8C17.6 12 17.8 12.1 18.1 12.1C18.4 12.1 18.6 12 18.8 11.8C19.2 11.4 19.2 10.8 18.8 10.4L17.4 9L18.8 7.6C19.2 7.2 19.2 6.6 18.8 6.2C18.4 5.8 17.8 5.8 17.4 6.2L16 7.6L14.6 6.2C14.2 5.8 13.6 5.8 13.2 6.2C12.8 6.6 12.8 7.2 13.2 7.6Z\" fill=\"#4C4C4C\"/>\n<path d=\"M20 12C19.4 12 19 12.4 19 13V15C19 15.6 18.6 16 18 16H7.7L5 17.6V7C5 6.4 5.4 6 6 6H12C12.6 6 13 5.6 13 5C13 4.4 12.6 4 12 4H6C4.3 4 3 5.3 3 7V21L8.3 18H18C19.7 18 21 16.7 21 15V13C21 12.4 20.6 12 20 12Z\" fill=\"#4C4C4C\"/>\n</svg>\n"
  }
  // const iconSvg = icon.svg.replace(/width=("|')\d*\w*("|')/g, '').replace(/height=("|')\d*\w*("|')/g, '')
  const iconSvg = icon.svg.replace('<svg ', '<svg class="h-12 w-12" ')

  return (
    <div
      id="icon-modal"
      aria-hidden="true"
      className="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0"
    >
      <div className="relative px-4 w-full max-w-2xl h-full md:h-auto">
        <div className="relative rounded-lg shadow bg-gray-700">
          <div className="flex justify-between items-start p-5 rounded-t border-b border-gray-500">
            <h3 className="text-xl font-semibold lg:text-2xl text-white">
              {icon.name}
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
            <div className="flex items-center justify-center icon-preview-container">
              {ReactHtmlParser(iconSvg)}
            </div>
          </div>
          
          {/* <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-600">
            <button
              type="button"
              className="flex items-center justify-center text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
              onClick={addIcon}
            >
              {isLoading && <div className="mr-2"><Spinner size="4" border="white" fill="blue-700" /></div>}
              <span>{isLoading ? 'Loading...' : 'Add'}</span>
            </button>
            <button
              data-modal-toggle="icon-modal"
              type="button"
              disabled={isLoading}
              className="border focus:ring-4 focus:ring-gray-300 rounded-lg text-sm font-medium px-5 py-2.5 focus:z-10 bg-gray-700 text-gray-300 border-gray-500 hover:text-white hover:bg-gray-600"
            >
              Cancel
            </button>
          </div> */}
        </div>
      </div>
    </div>
  )
}