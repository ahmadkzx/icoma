import 'flowbite'
import './assets/styles/app.scss'
import { useContext } from 'react'
import Spinner from './components/Spinner'
import { AppContext } from './contexts/app'
import IconList from './components/IconList'
import DefaultLayout from './layouts/default'

function App() {
  const [app] = useContext(AppContext)

  return (
    <div className="App">
      <DefaultLayout>
        <div className="container mx-auto mt-3">
          {
            app?.isLoading ?? true
              ? <div className="flex items-center justify-center min-h-[90vh]"><Spinner size="8" border="gray-600" fill="blue-600" /></div>
              : <IconList icons={app.icons || []} />
          }
        </div>
      </DefaultLayout>
    </div>
  )
}

export default App
