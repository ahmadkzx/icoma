import 'flowbite'
import React from 'react'
import ReactDOM from 'react-dom'
import './assets/styles/app.scss'
import { useContext } from 'react'
import { AppContext } from './contexts/app'
import IconList from './components/IconList'
import DefaultLayout from './layouts/default'
import { AppContextProvider } from './contexts/app'

function App() {
  const [app] = useContext(AppContext)

  return (
    <React.StrictMode>
      <AppContextProvider>
        <div className="App">
          {app && <DefaultLayout>
            <div className="container mx-auto mt-3">
              {app.icons && <IconList icons={app.icons} />}
            </div>
          </DefaultLayout>}
        </div>
      </AppContextProvider>
    </React.StrictMode>
  )
}

ReactDOM.render(App,document.getElementById('root'))
