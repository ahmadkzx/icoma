export default function Toast({ text }) {
  return (
    <div className="fixed bottom-3 right-3 z-50 flex p-4 mb-4 text-sm rounded-lg bg-red-200 text-red-800" role="alert">
      <svg className="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
      <div>
        <span className="font-medium">Error</span> {text}
      </div>
    </div>
  )
}