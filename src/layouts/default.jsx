import Toast from '../components/Toast'
import { AppContext } from '../contexts/app'
import { useContext, useEffect } from 'react'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'

export default function DefaultLayout({ children }) {
  const [app, dispatch] = useContext(AppContext)

  useEffect(function setToastTimeout() {
    const toastTimeout = setTimeout(() => dispatch({ type: 'HIDE_TOAST' }), 3000)
    return () => clearTimeout(toastTimeout)
  }, [app?.toast?.stamp])

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      {children}
      {app?.toast && <Toast text={app.toast.text} />}
      <Footer />
    </div>
  )
}