import Spinner from '../Spinner'

export default function LoadingModal() {
  return (
    <div
      id="loading-modal"
      aria-hidden="true"
      className="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal"
    >
      <div className="relative p-4 bg-gray-700 flex justify-center items-center rounded-lg">
        <Spinner size="md" color="gray-blue" />
      </div>
    </div>
  )
}