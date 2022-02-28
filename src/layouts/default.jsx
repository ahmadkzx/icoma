import Header from '../components/Layout/Header'

export default function DefaultLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      {children}
    </div>
  )
}