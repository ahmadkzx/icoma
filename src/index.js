import 'flowbite'
import React from 'react'
import ReactDOM from 'react-dom'
import './assets/styles/index.css'
import { AppContext } from './contexts/app'
import IconList from './components/IconList'
import DefaultLayout from './layouts/default'
import { AppContextProvider } from './contexts/app'

function Main() {
  const [app] = React.useContext(AppContext)

  return (
    <div>
      {app && <DefaultLayout>
        <div className="container mx-auto mt-3">
          {app.icons && <IconList icons={app.icons} />}
        </div>
      </DefaultLayout>}
    </div>
  )
}

function App() {
  return (
    <React.StrictMode>
      <AppContextProvider>
        <Main />
      </AppContextProvider>
    </React.StrictMode>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))
