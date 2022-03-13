export default function Toast({ text, type }) {
  return (
    type == 'ERROR'
      ? <div className="fixed bottom-3 right-3 z-50 p-4 mb-4 text-sm rounded-lg bg-red-200 text-red-800" role="alert">
          <span className="font-medium">Error</span> {text}
      </div>

      : <div class="fixed bottom-3 right-3 z-50 p-4 mb-4 text-sm rounded-lg bg-green-200 text-green-800" role="alert">
        <span class="font-medium">Success</span> {text}
      </div>
  )
}