import { createContext, useReducer } from 'react'

const AppReducer = (state, action) => {
  switch(action.type) {
    case 'SHOW_TOAST':
      return Object.assign({}, state, { toast: action.payload })
    case 'HIDE_TOAST':
      return Object.assign({}, state, { toast: null })
  }
}

export const AppContext = createContext()

export function AppContextProvider({ children }) {
  const [app, dispatch] = useReducer(AppReducer)

  return (
    <AppContext.Provider value={[ app, dispatch ]}>
      {children}
    </AppContext.Provider>
  )
}