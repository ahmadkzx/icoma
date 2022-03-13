import axios from 'axios'
import { createContext, useReducer, useEffect } from 'react'

const INITIAL_STATE = {
  toast: null,
  stamp: null,
  iconModal: null,
  isLoading: true,
}

const AppReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'INIT':
      return Object.assign({}, state, action.payload)
    case 'SHOW_TOAST':
      return Object.assign({}, state, { toast: action.payload })
    case 'HIDE_TOAST':
      return Object.assign({}, state, { toast: null })
    case 'REFRESH':
      return Object.assign({}, state, { stamp: new Date().getTime() })
    case 'SET_LOADING':
      return Object.assign({}, state, { isLoading: action.payload })
    case 'OPEN_ICON_MODAL':
      return Object.assign({}, state, { iconModal: action.payload })
    default:
      return state
  }
}

export const AppContext = createContext()

export function AppContextProvider({ children }) {
  const [app, dispatch] = useReducer(AppReducer)

  useEffect(() => getConfig(), [app?.stamp])

  async function getConfig() {
    try {
      dispatch({ type: 'SET_LOADING', payload: true })

      const endpoint = process.env.REACT_APP_SERVER_ORIGIN + '/api'
      const { data: result } = await axios.get(endpoint)
      
      dispatch({ type: 'INIT', payload: result.data })

    } catch(err) {
      console.error(err)
      
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false })
    }
  }

  return (
    <AppContext.Provider value={[ app, dispatch ]}>
      {children}
    </AppContext.Provider>
  )
}