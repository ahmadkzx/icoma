import useModal from '../hooks/modal'
import Toast from '../components/Toast'
import { AppContext } from '../contexts/app'
import { useContext, useEffect } from 'react'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import LoadingModal from '../components/LoadingModal'

export default function DefaultLayout({ children }) {
  const [app, dispatch] = useContext(AppContext)
  const [showLoadingModal, hideLoadingModal] = useModal('loading-modal')

  useEffect(function setToastTimeout() {
    const toastTimeout = setTimeout(() => dispatch({ type: 'HIDE_TOAST' }), 3000)
    return () => clearTimeout(toastTimeout)
  }, [app.toast?.stamp])

  useEffect(function toggleLoadingModal() {
    if (app?.isLoading) {
      showLoadingModal()
    } else {
      hideLoadingModal()
    }
  }, [app.isLoading])

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      {children}
      {app?.toast && <Toast text={app.toast.text} type={app.toast.type} />}
      <Footer />
      <LoadingModal />
    </div>
  )
}