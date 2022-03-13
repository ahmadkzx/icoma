import 'flowbite'
import './assets/styles/app.scss'
import { useContext } from 'react'
import { AppContext } from './contexts/app'
import IconList from './components/IconList'
import DefaultLayout from './layouts/default'

function App() {
  const [app] = useContext(AppContext)

  return (
    <div className="App">
      {app && <DefaultLayout>
        <div className="container mx-auto mt-3">
          {app.icons && <IconList icons={app.icons} />}
        </div>
      </DefaultLayout>}
    </div>
  )
}

export default App
