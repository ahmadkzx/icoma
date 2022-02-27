import Footer from '../components/Layout/Footer'

export default function DefaultLayout({ children }) {
  return (
    <div>
      <div className="bg-slate-900 min-h-screen">
        {children}
        <Footer />
      </div>
    </div>
  )
}