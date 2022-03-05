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
      {
        app?.isLoading ?? true
          ? <div className="flex items-center justify-center min-h-screen bg-slate-900"><Spinner size="8" border="gray-600" fill="blue-600" /></div>
          : <>
              <DefaultLayout>
                <div className="container mx-auto mt-3">
                  <IconList icons={app.icons || []} />
                </div>
              </DefaultLayout>
            </>
      }
    </div>
  )
}

export default App
