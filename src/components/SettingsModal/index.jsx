import { useState } from 'react'
import Spinner from '../Spinner'
import useModal from '../../hooks/modal'

export default function SettingsModal() {
  const [isLoading, setIsLoading] = useState(false)
  const [target, setTarget] = useState('vue')
  const [props, setProps] = useState([{ id: 1, name: 'Size', default: 24 }])
  const [showModal, hideModal] = useModal('settings-modal')

  function addProp() {
    setProps([...props, { id: props.length + 1, name: '', default: '' }])
  }

  function updateProp(targetProp) {
    setProps(props.map(prop => {
      if (prop.id == targetProp.id) prop = targetProp
      return prop
    }))
  }

  function save() {}

  return (
    <div
    id="settings-modal"
    aria-hidden="true"
    className="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0"
  >
    <div className="relative px-4 w-full max-w-2xl h-full md:h-auto">
      <div className="relative rounded-lg shadow bg-gray-700">
        <div className="flex justify-between items-start p-5 rounded-t border-b border-gray-500">
          <h3 className="text-xl font-semibold lg:text-2xl text-white">
            Settings
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
            <span className="block mb-2 text-sm font-medium text-gray-900 text-gray-300">Target</span>

            <div className="flex items-center mb-2">
              <input
                value="vue"
                type="radio"
                name="target"
                id="target-vue"
                checked={target == 'vue'}
                onChange={e => setTarget(e.target.value)}
                className="w-4 h-4 focus:ring-2 focus:ring-blue-600 focus:bg-blue-600 bg-gray-700 border-gray-600"
              />
              <label htmlFor="target-vue" className="block ml-2 text-sm font-medium text-gray-300">Vue</label>
            </div>

            <div className="flex items-center">
              <input
                type="radio"
                value="react"
                name="target"
                id="target-react"
                checked={target == 'react'}
                onChange={e => setTarget(e.target.value)}
                className="w-4 h-4 focus:ring-2 focus:ring-blue-600 focus:bg-blue-600 bg-gray-700 border-gray-600"
              />
              <label htmlFor="target-react" className="block ml-2 text-sm font-medium text-gray-300">React</label>
            </div>
          </div>

          <div className="mt-3">
            <span className="block mb-2 text-sm font-medium text-gray-900 text-gray-300">Props</span>

            {props.map(prop => <div className="grid grid-cols-2 gap-2 mb-2" key={'prop-' + prop.id}>
              <input
                type="text"
                value={prop.name}
                placeholder="Name"
                className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                onChange={e => updateProp({ id: prop.id, name: e.target.value, default: prop.default })}
              />

              <input
                type="text"
                value={prop.default}
                placeholder="Default"
                className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                onChange={e => updateProp({ id: prop.id, name: prop.name, default: e.target.value })}
              />
            </div>)}

            <button
              type="button"
              className="text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 bg-gray-800 hover:bg-gray-600 focus:ring-gray-800 border-gray-700"
            >
              Add
            </button>
          </div>
        </div>
        
        <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-600">
          <button
            type="button"
            className="flex items-center justify-center text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
            onClick={save}
          >
            {isLoading && <div className="mr-2"><Spinner size="4" border="white" fill="blue-700" /></div>}
            <span>{isLoading ? 'Loading...' : 'Save'}</span>
          </button>
          <button
            data-modal-toggle="settings-modal"
            type="button"
            disabled={isLoading}
            className="border focus:ring-4 focus:ring-gray-300 rounded-lg text-sm font-medium px-5 py-2.5 focus:z-10 bg-gray-700 text-gray-300 border-gray-500 hover:text-white hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}